import React from 'react';
import { Card, CardActions, CardContent, CardHeader, CardMedia, Grid, IconButton, styled } from '@mui/material';
import { Link } from 'react-router-dom';
import { API_URL } from '../constatnts.ts';

const ImageCardMedia = styled(CardMedia)({
  height: 0,
  paddingTop: '56.25%',
});

interface Props {
  id: string;
  author: string;
  message: string;
  image: string | null;
}

const ReviewItem: React.FC<Props> = ({ id, author, message, image }) => {
  let cardImage;
  if(image) {
     cardImage = `${API_URL}/${image}`;
  }
  return (
    <Grid item sx={{ width: '300px' }}>
      <Card sx={{ height: '100%' }}>
        <CardHeader title={author} />
        <ImageCardMedia image={cardImage} />
        <CardContent>
         {message}
        </CardContent>
        <CardActions>
          <IconButton component={Link} to={`/reviews/${id}`}>
          </IconButton>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default ReviewItem;