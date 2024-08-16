import React, { useState } from 'react';
import { Grid, TextField } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import SaveIcon from '@mui/icons-material/Save';
import FileInput from '../UI/FileInput.tsx';
import { ReviewMutation } from '../types.ts';

interface Props {
  onSubmit: (review: ReviewMutation) => void;
  isLoading: boolean;
}

const ProductForm: React.FC<Props> = ({ onSubmit, isLoading }) => {
  const [state, setState] = useState<ReviewMutation>({
    author: '',
    message: '',
    image: null,
  });

  const submitFormHandler = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit({ ...state });
  };

  const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const fileInputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = event.target;
    const value = files && files[0] ? files[0] : null;

    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <Grid container direction="column" spacing={2} component="form" onSubmit={submitFormHandler}>
      <Grid item>
        <TextField required label="Author" id="author" name="author" value={state.author} onChange={inputChangeHandler} />
      </Grid>
      <Grid item>
        <TextField
          label="Message"
          id="message"
          name="message"
          value={state.message}
          onChange={inputChangeHandler}
        />
      </Grid>

      <Grid item>
        <FileInput label="Image" name="image" onChange={fileInputChangeHandler} />
      </Grid>
      <Grid item>
        <LoadingButton
          type="submit"
          loading={isLoading}
          loadingPosition="start"
          startIcon={<SaveIcon />}
          variant="contained"
        >
          <span>Save</span>
        </LoadingButton>
      </Grid>
    </Grid>
  );
};

export default ProductForm;