import { ChangeEvent, Fragment } from 'react';
import { RatingsStar } from '../../const';

type TRatingStarProps = {
  handleChange: (evt: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void;
  formRatingValue: number;
  status: boolean;
}

export default function RatingStar({handleChange, formRatingValue, status}: TRatingStarProps) {
  return (
    RatingsStar.map(([title, value]) => (
      <Fragment key={value}>
        <input className="form__rating-input visually-hidden"
          name="rating"
          value={value}
          id={`${value}-stars`}
          type="radio"
          onChange={handleChange}
          checked={formRatingValue === +value}
          disabled={status}
        />
        <label htmlFor={`${value}-stars`} className="reviews__rating-label form__rating-label" title={title}>
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>
      </Fragment>
    ))
  );
}
