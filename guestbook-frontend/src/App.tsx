import React from 'react';
import Reviews from './components/Reviews.tsx';
import { Route, Routes } from 'react-router-dom';
import { Container, Typography } from '@mui/material';
import NewReview from './components/NewReview.tsx';
import OneReview from './components/OneReview.tsx';

const App: React.FC = () => {
  return (
    <div>
      <Container maxWidth="xl" component="main">
        <Routes>
          <Route path="/" element={<Reviews />} />
          <Route path="/reviews/new" element={<NewReview />} />
          <Route path="/reviews/:id" element={<OneReview />} />
          <Route path="*" element={<Typography variant="h1">Not found</Typography>} />
        </Routes>
      </Container>
    </div>
  );
};

export default App;