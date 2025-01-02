import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './assets/styles/theme';
import Homepage from './pages/Homepage';

function App() {
  return (
    <ThemeProvider {...{ theme }}>
      <CssBaseline />
      <Homepage />
    </ThemeProvider>
  );
}

export default App;
