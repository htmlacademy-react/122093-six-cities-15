import RatingStar from '@components/rating-star';
import { MAX_CHARACTERS, MIN_CHARACTERS, RequestStatus } from '@const';
import { useAppDispatch, useAppSelector } from '@hooks/index';
import { commentsSelectors } from '@store/slices/comments';
import { addNewCommentAction } from '@store/thunks/comments';
import { ChangeEvent, SyntheticEvent, useState } from 'react';

type CommentFormProps = {
  offerId: string;
}

function CommentForm({offerId}: CommentFormProps) {
  const addCommentStatus = useAppSelector(commentsSelectors.addCommentStatus);
  const loadingStatus = addCommentStatus === RequestStatus.Loading;
  const [form, setForm] = useState({
    review: '',
    rating: 0,
  });

  const buttonDisabled = form.review.length < MIN_CHARACTERS || form.review.length > MAX_CHARACTERS || !form.rating;
  const handleChange = (evt: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const {name, value} = evt.target;
    const inputValue = name === 'rating' ? Number(value) : value;
    setForm({...form, [name]: inputValue});
  };

  const dispatch = useAppDispatch();

  const handleSubmitClick = (evt: SyntheticEvent) => {
    evt.preventDefault();
    dispatch(addNewCommentAction({offerId, ...{comment: form.review, rating: form.rating}}))
      .unwrap()
      .then(() => setForm({review: '', rating: 0,}))
      .catch(() => setForm(form));
  };

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={handleSubmitClick}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        <RatingStar handleChange={handleChange} formRatingValue={form.rating} status={loadingStatus}/>
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={form.review}
        onChange={handleChange}
        disabled={loadingStatus}
        data-testid="review-textarea"
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
                      To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={loadingStatus || buttonDisabled}>Submit</button>
      </div>
    </form>
  );
}

export default CommentForm;
