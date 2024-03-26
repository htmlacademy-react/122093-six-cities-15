import { ChangeEvent, SyntheticEvent, useState } from 'react';
import RatingStar from '../rating-star/rating-star';
import { useAppDispatch } from '../../hooks';
import { addNewCommentAction } from '../../store/thunks/comments';

type CommentFormProps = {
  offerId: string;
}

const MIN_CHARACTERS = 50;
const MAX_CHARACTERS = 300;

export default function CommentForm({offerId}: CommentFormProps) {
  const [form, setForm] = useState({
    comment: '',
    rating: 0,
  });

  const dispatch = useAppDispatch();

  const handleSubmitClick = (evt: SyntheticEvent) => {
    evt.preventDefault();
    dispatch(addNewCommentAction({offerId, ...form}));
    setForm({comment: '', rating: 0,});
  };

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={handleSubmitClick}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        <RatingStar getRating={(rate) => setForm({...form, rating: rate})} formRatingValue={form.rating} />
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={form.comment}
        onChange={({target}: ChangeEvent<HTMLTextAreaElement>) => {
          setForm({...form, comment: target.value}
          );
        }}
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
                      To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={form.comment.length <= MIN_CHARACTERS || form.comment.length >= MAX_CHARACTERS || !form.rating}>Submit</button>
      </div>
    </form>
  );
}
