import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import Layout from 'components/Layout';
import HomePage from 'views/HomePage';
import MintingPage from 'views/MintingPage';
import PreSalePage from 'views/PreSalePage';

const light = {
  palette: {
    mode: "light",
  },
};

const dark = {
  palette: {
    mode: "dark",
  },
};

function App() {

  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const changeTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <BrowserRouter>
      <ThemeProvider theme={isDarkTheme ? createTheme(dark) : createTheme(light)}>
        <Layout changeTheme={changeTheme} isDarkTheme={isDarkTheme}>
          <Routes>
            <Route path='/minting' element={<MintingPage />} />
            <Route path='/pre-sale' element={<PreSalePage />} />
            <Route path='/' element={<HomePage />} />
          </Routes>
        </Layout>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
