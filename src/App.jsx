import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import Layout from 'components/layout';
import HomePage from 'views/homePage';
import MintingPage from 'views/mintingPage';
import PreSalePage from 'views/preSalePage';
import MyInventoryPage from 'views/myInventoryPage';
import NftFarmPage from 'views/nftFarmPage';
import NftViewPage from 'views/nftViewPage';
import MarketplacePage from 'views/marketplacePage';

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

  const [isDarkTheme, setIsDarkTheme] = useState(true);

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
            <Route path='/inventory' element={<MyInventoryPage />} />
            <Route path='/nft-farm' element={<NftFarmPage />} />
            <Route path='/miner' element={<NftViewPage />} />
            <Route path='/marketplace' element={<MarketplacePage />} />
            <Route path='/home' element={<HomePage />} />
            <Route path='/' element={<PreSalePage />} />
          </Routes>
        </Layout>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
