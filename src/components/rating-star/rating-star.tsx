import { RatingsStar } from '@const';
import { ChangeEvent, Fragment } from 'react';

type TRatingStarProps = {
  handleChange: (evt: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void;
  formRatingValue: number;
  status: boolean;
}

function RatingStar({handleChange, formRatingValue, status}: TRatingStarProps) {
  return (
    RatingsStar.map(([title, value]) => (
      <Fragment key={value}>
        <input className="form__rating-input visually-hidden"
          name="rating"
          value={value}
          id={`${value}-stars`}
          type="radio"
          onChange={handleChange}
          checked={formRatingValue === Number(value)}
          disabled={status}
          data-testid={`rating-star-${value}`}
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

export default RatingStar;
