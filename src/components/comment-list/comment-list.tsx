import { useEffect, useState } from 'react';
import { useAppSelector } from '../../hooks';
import { getRatingWidth } from '../../utils';
import { commentsSelectors } from '../../store/slices/comments';

const DEFAULT_COMMENT_COUNT = 10;

export default function CommentList() {
  const [buttonShow, setButtonShow] = useState(false);
  const [renderedCommentsCount, setRenderedCommentsCount] = useState(DEFAULT_COMMENT_COUNT);
  const initialComments = useAppSelector(commentsSelectors.comments);
  const sortedComments = initialComments.toSorted(({date: a}, {date: b}) => a < b ? 1 : -1);
  let commentCounter = 0;

  useEffect(() => {
    if (initialComments.length !== 0 && DEFAULT_COMMENT_COUNT < initialComments.length) {
      setButtonShow(true);
      if (renderedCommentsCount === initialComments.length) {
        setButtonShow(false);
      }
    }
  },[initialComments.length, renderedCommentsCount]);

  const renderComments = () => {
    const maxCount = commentCounter + renderedCommentsCount;
    const comments = sortedComments.slice(commentCounter, maxCount);
    commentCounter += maxCount;
    return comments;
  };

  const comments = renderComments();

  const handleButtonClick = () => {
    const nextComments = renderComments();
    const renderedComments = comments.concat(nextComments);
    setRenderedCommentsCount(renderedComments.length);
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
              <time className="reviews__time" dateTime={comment.date}>{comment.date}</time>
            </div>
          </li>
        ))}
      </ul>
      {buttonShow && <button onClick={handleButtonClick} className="reviews__submit form__submit button" type="button" style={{marginLeft:'250px'}}>Load more</button>}
    </>
  );
}
