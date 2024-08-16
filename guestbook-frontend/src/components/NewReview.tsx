import { Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ProductForm from './ReviewForm.tsx';
import { useAppDispatch, useAppSelector } from '../app/hooks.ts';
import { ReviewMutation } from '../types.ts';
import { selectReviewsCreating } from '../store/reviewSlice.ts';
import { createReview } from '../store/reviewThunks.ts';

const NewReview = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const isCreating = useAppSelector(selectReviewsCreating);

  const onFormSubmit = async (reviewMutation: ReviewMutation) => {
    await dispatch(createReview(reviewMutation));
    navigate('/');
  };

  return (
    <>
      <Typography variant="h4" sx={{ mb: 2 }}>
        New product
      </Typography>
      <ProductForm onSubmit={onFormSubmit} isLoading={isCreating} />
    </>
  );
};

export default NewReview;