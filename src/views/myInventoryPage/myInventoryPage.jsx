import React, { useState } from 'react';
import { slice } from 'lodash'
import { useTheme } from '@mui/material/styles';
import { makeStyles } from "@mui/styles";

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import InputAdornment from '@mui/material/InputAdornment';

import ContensContainer from 'components/contensContainer';
import BannerSection from './bannerSection';
import Pagination from 'components/pagination';
import NftCard from 'components/nftCard';
import CustomTextField from 'components/customTextField';

import nftCardsData from 'assets/mockdata/nftCardsData';

import searchIcon from 'assets/img/search.png';
import whiteSearchIcon from 'assets/img/search-white.png';
import styles from 'assets/jss/views/inventoryPageStyles';
const useStyles = makeStyles(styles);

const MyInventoryPage = () => {

  const theme = useTheme();
  const classes = useStyles();

  const [page, setPage] = useState(1);
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(4);

  const handleChangePagination = (page) => {
    setPage(page);
    setStartIndex((page - 1) * 4);
    setEndIndex(page * 4);
  }

  return (
    <ContensContainer title='MY INVENTORY' sx={{ backgroundColor: theme.palette.mode === 'dark' ? '#1A1C1E' : '#fff' }}>
      <BannerSection />
      <Box display='flex' flexWrap='wrap' alignItems='center' justifyContent='space-between' className={classes.header}>
        <Box className={classes.searchField}>
          <CustomTextField
            placeholder='Search'
            endAdornment={<InputAdornment position="end"><img src={theme.palette.mode === 'dark' ? whiteSearchIcon : searchIcon} alt="" width={13.24} /></InputAdornment>}
          />
        </Box>
        <Pagination
          page={page}
          count={Math.ceil(nftCardsData.length / 4)}
          onChange={handleChangePagination}
        />
      </Box>
      <Grid container spacing={2} columnSpacing={{ lg: 4, md: 3, sm: 3, xs: '14px' }}>
        {
          slice(nftCardsData, startIndex, endIndex).map((nft, index) => (
            <Grid item xs={6} sm={6} md={4} lg={3} key={index}>
              <NftCard
                data={nft}
              />
            </Grid>
          ))
        }
      </Grid>
    </ContensContainer>
  )
}

export default MyInventoryPage;
