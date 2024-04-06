import { RequestStatus } from '@const';
import { createSlice } from '@reduxjs/toolkit';
import { addNewCommentAction, fetchCommentsByIdAction } from '@store/thunks/comments';
import { Comment } from '@type/comment';

type CommentsState = {
  comments: Comment[];
  fetchCommentStatus: RequestStatus;
  addCommentStatus: RequestStatus;
}

const initialState: CommentsState = {
  comments: [],
  fetchCommentStatus: RequestStatus.Idle,
  addCommentStatus: RequestStatus.Idle,
};

const commentsSlice = createSlice({
  extraReducers: (builder) =>
    builder
      .addCase(fetchCommentsByIdAction.pending, (state) => {
        state.fetchCommentStatus = RequestStatus.Loading;
      })
      .addCase(fetchCommentsByIdAction.fulfilled, (state, action) => {
        state.fetchCommentStatus = RequestStatus.Success;
        state.comments = action.payload;
      })
      .addCase(fetchCommentsByIdAction.rejected, (state) => {
        state.fetchCommentStatus = RequestStatus.Failed;
      })
      .addCase(addNewCommentAction.pending, (state) => {
        state.addCommentStatus = RequestStatus.Loading;
      })
      .addCase(addNewCommentAction.fulfilled, (state, action) => {
        state.addCommentStatus = RequestStatus.Success;
        state.comments = [action.payload, ...state.comments];
      })
      .addCase(addNewCommentAction.rejected, (state) => {
        state.addCommentStatus = RequestStatus.Failed;
      }),
  initialState,
  name: 'comments',
  reducers: {
    clear(state) {
      state.comments = [];
    }},
  selectors: {
    comments: (state) => state.comments,
    fetchCommentStatus: (state) => state.fetchCommentStatus,
    addCommentStatus: (state) => state.addCommentStatus
  }
});

const commentsActions = {...commentsSlice.actions, fetchCommentsByIdAction, addNewCommentAction};
const commentsSelectors = commentsSlice.selectors;

export { commentsActions, commentsSlice, commentsSelectors };
