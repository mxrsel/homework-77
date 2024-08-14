import { createRoot } from 'react-dom/client'
import {Provider} from 'react-redux'
import App from './App.tsx'
import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from './theme.ts';
import { store } from './app/store.ts';

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
    <App />
    </ThemeProvider>
  </Provider>,
)
