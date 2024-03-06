import { Comment } from '../types/comment';

const comments: Comment[] = [
  {
    id: 'f80fb849-608a-4452-b77f-4bb594250aa1',
    comment: 'Home is amazing. It\'s like staying in a museum. The rooms, furnishings and artworks are incredible. The views of My Vesuvius',
    date: '2024-02-06T21:00:00.412Z',
    rating: 1,
    user: {
      name: 'Corey',
      avatarUrl: 'https://15.design.htmlacademy.pro/static/avatar/6.jpg',
      isPro: true
    }
  },
  {
    id: 'ad8b6874-024e-49d1-9f4e-664836f0f209',
    comment: 'Bathed in the nature. Completely unplugged. Unforgettable.',
    date: '2024-02-04T21:00:00.412Z',
    rating: 5,
    user: {
      name: 'Sophie',
      avatarUrl: 'https://15.design.htmlacademy.pro/static/avatar/2.jpg',
      isPro: true
    }
  }
];

export default comments;
