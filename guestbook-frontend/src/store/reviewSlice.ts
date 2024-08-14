import { createSlice } from '@reduxjs/toolkit';
import { Review } from '../types.ts';
import { createReview, fetchOneReview, fetchReview } from './reviewThunks.ts';

interface ReviewState {
  messages: Review[];
  review: Review | null;
  messagesFetch: boolean;
  oneMessageFetch: boolean;
  isCreated: boolean;
}

const initialState: ReviewState = {
  messages: [],
  review: null,
  messagesFetch: false,
  oneMessageFetch: false,
  isCreated: false,
};

export const reviewSlice = createSlice({
  name: "review",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchReview.pending, (state) => {
        state.messagesFetch = true;
      })
      .addCase(fetchReview.fulfilled, (state, {payload: review}) => {
        state.messagesFetch = false;
        state.messages = review;
      })
      .addCase(fetchReview.rejected, (state) => {
        state.messagesFetch = false;
      });

    builder
      .addCase(createReview.pending, (state) => {
        state.isCreated = true;
      })
      .addCase(createReview.fulfilled, (state) => {
        state.isCreated = false;
      })
      .addCase(createReview.rejected, (state) => {
        state.isCreated = false;
      });

    builder
      .addCase(fetchOneReview.pending, (state) => {
        state.review = null;
        state.oneMessageFetch = true;
      })
      .addCase(fetchOneReview.fulfilled, (state, {payload: review}) => {
        state.review = review;
        state.oneMessageFetch = false;
      })
      .addCase(fetchOneReview.rejected, (state) => {
        state.oneMessageFetch = false;
      });
  },
  selectors: {
    selectReviews: (state) => state.messages,
    selectReviewsFetching: (state) => state.messagesFetch,
    selectReviewsCreating: (state) => state.isCreated,
    selectOneReview: (state) => state.review,
    selectOneMessageFetch: (state) => state.oneMessageFetch,
  },
});

export const reviewsReducer = reviewSlice.reducer;

export const {
  selectReviews,
  selectReviewsFetching,
  selectReviewsCreating,
  selectOneReview,
  selectOneMessageFetch
} = reviewSlice.selectors;