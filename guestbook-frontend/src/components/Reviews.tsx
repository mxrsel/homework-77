import { Button, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../app/hooks.ts';
import { fetchReview } from '../store/reviewThunks.ts';
import { selectReviews } from '../store/reviewSlice.ts';
import ReviewItem from './ReviewItem.tsx';

const Reviews = () => {
  const dispatch = useAppDispatch();
  const reviews = useAppSelector(selectReviews);

  useEffect(() => {
    dispatch(fetchReview());
  }, [dispatch]);


  return (
    <Grid container direction="column" spacing={2}>
      <Grid item container justifyContent="space-between" alignItems="center">
        <Grid item>
          <Typography variant="h4">Products</Typography>
        </Grid>
        <Grid item>
          <Button variant='contained' color="primary" component={Link} to="/reviews/new">
            Add product
          </Button>
        </Grid>
      </Grid>
      <Grid item container spacing={1}>
        {Array.isArray(reviews) && reviews.map((review) => (
          <ReviewItem
            key={review.id}
            id={review.id}
            author={review.author}
            message={review.message}
            image={review.image}
          />
        ))}
      </Grid>
    </Grid>
  );
};

export default Reviews;