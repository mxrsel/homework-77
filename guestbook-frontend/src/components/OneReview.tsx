import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { CircularProgress, Grid, Typography } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../app/hooks.ts';
import { selectOneMessageFetch, selectOneReview } from '../store/reviewSlice.ts';
import { fetchOneReview } from '../store/reviewThunks.ts';

const OneReview = () => {
  const { id } = useParams() as { id: string };
  const dispatch = useAppDispatch();
  const review = useAppSelector(selectOneReview);
  const isFetching = useAppSelector(selectOneMessageFetch);

  useEffect(() => {
    dispatch(fetchOneReview(id));
  }, [dispatch, id]);

  return (
    <Grid container direction="column" spacing={2}>
      {isFetching && (
        <Grid item>
          <CircularProgress />
        </Grid>
      )}
      {review && (
        <>
          <Grid item component={Typography} variant="h4">
            {review.author}
          </Grid>
          <Grid item component={Typography} variant="h6">
            {review.message}
          </Grid>
        </>
      )}
    </Grid>
  );
};

export default OneReview;