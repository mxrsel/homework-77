import { createAsyncThunk } from '@reduxjs/toolkit';
import { Review, ReviewMutation } from '../types.ts';
import axiosApi from '../axiosApi.ts';

export const fetchReview = createAsyncThunk<Review[]>('reviews/fetchingALl', async () =>{
  const {data: reviews} = await axiosApi.get<Review[]>('http://localhost:8000/reviews');
  return reviews;
});

export const createReview = createAsyncThunk<void, ReviewMutation>('reviews/create', async (reviewMutation) => {
  const formData = new FormData();
  formData.append('author', reviewMutation.author);
  formData.append('message', reviewMutation.message);

  if(reviewMutation.image) {
    formData.append('image', reviewMutation.image);
  }

  await axiosApi.post('http://localhost:8000/reviews', formData);
});

export const fetchOneReview = createAsyncThunk<Review, string>('reviewS/fetchOne', async (id) => {
  const { data: review } = await axiosApi.get<Review>(`/reviews/${id}`);
  return review;
});