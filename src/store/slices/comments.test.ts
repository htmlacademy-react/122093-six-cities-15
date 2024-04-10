import { RequestStatus } from '@const';
import { commentsSlice } from './comments';
import { makeFakeComment } from '@utils/mocks';
import { addNewCommentAction, fetchCommentsByIdAction } from '@store/thunks/comments';

describe('Comment Slice', () => {
  it('should return initial state with empty action', () => {
    const emptyAction = { type: '' };
    const expectedState = { comments: [], fetchCommentStatus: RequestStatus.Idle, addCommentStatus: RequestStatus.Idle };

    const result = commentsSlice.reducer(expectedState, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should return default initial state with empty action', () => {
    const emptyAction = { type: '' };
    const expectedState = { comments: [], fetchCommentStatus: RequestStatus.Idle, addCommentStatus: RequestStatus.Idle };

    const result = commentsSlice.reducer(undefined, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should set "Loading" with "fetchCommentsAction.pending" action', () => {
    const initialState = { comments: [], fetchCommentStatus: RequestStatus.Idle, addCommentStatus: RequestStatus.Idle };
    const expectedState = { comments: [], fetchCommentStatus: RequestStatus.Loading, addCommentStatus: RequestStatus.Idle };

    const result = commentsSlice.reducer(initialState, fetchCommentsByIdAction.pending('offerId', ''));

    expect(result).toEqual(expectedState);
  });

  it('should set "Success" with "fetchCommentsAction.fulfilled" action', () => {
    const comments = [makeFakeComment()];
    const initialState = { comments: [], fetchCommentStatus: RequestStatus.Idle, addCommentStatus: RequestStatus.Idle };
    const expectedState = { comments, fetchCommentStatus: RequestStatus.Success, addCommentStatus: RequestStatus.Idle };

    const result = commentsSlice.reducer(initialState, fetchCommentsByIdAction.fulfilled(comments, 'offerId', ''));

    expect(result).toEqual(expectedState);
  });

  it('should set "Failed" with "fetchCommentsAction.rejected" action', () => {
    const initialState = { comments: [], fetchCommentStatus: RequestStatus.Idle, addCommentStatus: RequestStatus.Idle };
    const expectedState = { comments: [], fetchCommentStatus: RequestStatus.Failed, addCommentStatus: RequestStatus.Idle };

    const result = commentsSlice.reducer(initialState, fetchCommentsByIdAction.rejected(null, 'offerId', ''));

    expect(result).toEqual(expectedState);
  });

  it('should set "Loading" with "addCommentAction.pending" action', () => {
    const initialState = { comments: [], fetchCommentStatus: RequestStatus.Idle, addCommentStatus: RequestStatus.Idle };
    const expectedState = { comments: [], fetchCommentStatus: RequestStatus.Idle, addCommentStatus: RequestStatus.Loading };

    const result = commentsSlice.reducer(initialState, addNewCommentAction.pending('offerId', { offerId: 'offerId', ...{ comment: 'test', rating: 5 } }));

    expect(result).toEqual(expectedState);
  });

  it('should set "Success" with "addCommentAction.fulfilled" action', () => {
    const comment = makeFakeComment();
    const initialState = { comments: [], fetchCommentStatus: RequestStatus.Idle, addCommentStatus: RequestStatus.Idle };
    const expectedState = { comments: [comment], fetchCommentStatus: RequestStatus.Idle, addCommentStatus: RequestStatus.Success };

    const result = commentsSlice.reducer(initialState, addNewCommentAction.fulfilled(comment, 'offerId', { offerId: 'offerId', ...{ comment: 'test', rating: 5 } }));

    expect(result).toEqual(expectedState);
  });

  it('should set "Failed" with "addCommentAction.rejected" action', () => {
    const initialState = { comments: [], fetchCommentStatus: RequestStatus.Idle, addCommentStatus: RequestStatus.Idle };
    const expectedState = { comments: [], fetchCommentStatus: RequestStatus.Idle, addCommentStatus: RequestStatus.Failed };

    const result = commentsSlice.reducer(initialState, addNewCommentAction.rejected(null, 'offerId', { offerId: 'offerId', ...{ comment: 'test', rating: 5 } }));

    expect(result).toEqual(expectedState);
  });
});
