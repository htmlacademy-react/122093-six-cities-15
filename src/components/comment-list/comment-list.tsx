import { DEFAULT_COMMENT_COUNT } from '@const';
import { useAppSelector } from '@hooks/index';
import { commentsSelectors } from '@store/slices/comments';
import { formatDateToISO, getRatingWidth, humanizeDate } from '@utils';
import LoadMoreButton from './load-more-button';
import { memo, useState } from 'react';

function CommentList() {
  const [renderedComments, setRenderedComments] = useState(DEFAULT_COMMENT_COUNT);

  const initialComments = useAppSelector(commentsSelectors.comments);
  const sortedComments = initialComments.toSorted(({date: a}, {date: b}) => a < b ? 1 : -1);

  const comments = sortedComments.slice(0, renderedComments);

  const handleButtonClick = () => {
    setRenderedComments(renderedComments + DEFAULT_COMMENT_COUNT);
  };

  return (
    <>
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{initialComments.length}</span></h2>
      <ul className="reviews__list">
        {comments.map((comment) => (
          <li className="reviews__item" key={`${comment.user.name}-${comment.id}`}>
            <div className="reviews__user user">
              <div className="reviews__avatar-wrapper user__avatar-wrapper">
                <img className="reviews__avatar user__avatar" src={comment.user.avatarUrl} width="54" height="54" alt="Reviews avatar" />
              </div>
              <span className="reviews__user-name">
                {comment.user.name}
              </span>
            </div>
            <div className="reviews__info">
              <div className="reviews__rating rating">
                <div className="reviews__stars rating__stars">
                  <span style={{ width: getRatingWidth(comment.rating) }}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
              </div>
              <p className="reviews__text">
                {comment.comment}
              </p>
              <time className="reviews__time" dateTime={formatDateToISO(comment.date)}>{humanizeDate(comment.date)}</time>
            </div>
          </li>
        ))}
      </ul>
      {initialComments.length > renderedComments && <LoadMoreButton handleClick={handleButtonClick}/>}
    </>
  );
}

const MemoizedCommentList = memo(CommentList);
export default MemoizedCommentList;
