import { APIRoute } from '@const';
import { createAppAsyncThunk } from '@hooks/index';
import { Comment } from '@type/comment';
import { Offer } from '@type/offer';

export const fetchCommentsByIdAction = createAppAsyncThunk<Comment[], Offer['id']>(
  'data/fetchCommentsById',
  async (offerId, {extra: api}) => {
    const {data} = await api.get<Comment[]>(`${APIRoute.Comments}/${offerId}`);
    return data;
  }
);

type CommentData = {
  offerId: Offer['id'];
  comment: string;
  rating: number;
}

export const addNewCommentAction = createAppAsyncThunk<Comment, CommentData>(
  'data/addNewComment',
  async ({offerId, comment, rating}, {extra: api}) => {
    const {data} = await api.post<Comment>(`${APIRoute.Comments}/${offerId}`, {comment, rating});
    return data;
  }
);
