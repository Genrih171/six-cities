export type TReview = {
  id: string;
  date: string;
  user: {
    name: string;
    avatarUrl: string;
    isPro: boolean;
    };
  comment: string;
  rating: number;
};

export type TReviewsToOffer = {
  offerId: string;
  reviews: TReview[];
};

export type TReviews = TReviewsToOffer[];
