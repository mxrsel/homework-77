import { createAsyncThunk } from '@reduxjs/toolkit';
import { Review, ReviewMutation } from '../types.ts';
import axiosApi from '../axiosApi.ts';

export const fetchReview = createAsyncThunk<Review[]>('reviews/fetchingALl', async () =>{
  const {data: reviews} = await axiosApi.get<Review[]>('reviews');
  return reviews;
});

export const createReview = createAsyncThunk<void, ReviewMutation>('reviews/create', async (reviewMutation) => {
  const formData = new FormData();
  formData.append('author', reviewMutation.author);
  formData.append('message', reviewMutation.message);

  if(reviewMutation.image) {
    formData.append('image', reviewMutation.image);
  }

  await axiosApi.post('/review', formData);
});

export const fetchOneReview = createAsyncThunk<Review, string>('review/fetchOne', async (id) => {
  const { data: review } = await axiosApi.get<Review>(`/review/${id}`);
  return review;
});