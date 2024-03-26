import { createSlice } from '@reduxjs/toolkit';
import { RequestStatus } from '../../const';
import { Comment } from '../../types/comment';
import { addNewCommentAction, fetchCommentsByIdAction } from '../thunks/comments';

type CommentsState = {
  comments: Comment[];
  status: RequestStatus;
}

const initialState: CommentsState = {
  comments: [],
  status: RequestStatus.Idle,
};

const commentsSlice = createSlice({
  extraReducers: (builder) =>
    builder
      .addCase(fetchCommentsByIdAction.pending, (state) => {
        state.status = RequestStatus.Loading;
      })
      .addCase(fetchCommentsByIdAction.fulfilled, (state, action) => {
        state.status = RequestStatus.Success;
        state.comments = action.payload;
      })
      .addCase(fetchCommentsByIdAction.rejected, (state) => {
        state.status = RequestStatus.Failed;
      })
      .addCase(addNewCommentAction.pending, (state) => {
        state.status = RequestStatus.Loading;
      })
      .addCase(addNewCommentAction.fulfilled, (state, action) => {
        state.status = RequestStatus.Success;
        state.comments = [action.payload, ...state.comments];
      })
      .addCase(addNewCommentAction.rejected, (state) => {
        state.status = RequestStatus.Failed;
      }),
  initialState,
  name: 'comments',
  reducers: {
    clear(state) {
      state.comments = [];
    }},
  selectors: {
    comments: (state) => state.comments,
    commentsStatus: (state) => state.status,

  }
});

const commentsActions = {...commentsSlice.actions, fetchCommentsByIdAction, addNewCommentAction};
const commentsSelectors = commentsSlice.selectors;

export { commentsActions, commentsSlice, commentsSelectors };
