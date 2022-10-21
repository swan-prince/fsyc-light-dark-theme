import React, { useState } from 'react';
import clsx from 'clsx';
import { slice } from 'lodash';
import { useTheme } from '@mui/material/styles';
import { makeStyles } from "@mui/styles";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import InputAdornment from '@mui/material/InputAdornment';

import ContensContainer from 'components/contensContainer';
import CustomButton from 'components/customButton';
import BannerSection from './bannerSection';
import ActivityBannerSection from 'views/mintingPage/bannerSection';
import CustomTextField from 'components/customTextField';
import CustomSelect from 'components/customSelect';
import NftCard from 'components/nftCard';
import Pagination from 'components/pagination';
import ActivityTable from './activityTable';
import NftMintingDialog from 'components/nftMintingDialog';

import { priceOptions } from 'assets/mockdata/selectOptionsData';
import nftCardsData from 'assets/mockdata/nftCardsData';
import searchIcon from 'assets/img/search.png';
import whiteSearchIcon from 'assets/img/search-white.png';

import styles from 'assets/jss/views/marketplacePageStyles';
const useStyles = makeStyles(styles);

const MarketplacePage = () => {

  const theme = useTheme();
  const classes = useStyles();

  const [select, setSelect] = useState('');
  const [tab, setTab] = useState('miners');
  const [page, setPage] = useState(1);
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(4);
  const [openMintDialog, setOpenMintDialog] = useState(false);

  const handleChangePagination = (page) => {
    setPage(page);
    setStartIndex((page - 1) * 4);
    setEndIndex(page * 4);
  }

  return (
    <ContensContainer title='NFT MARKETPLACE' sx={{ backgroundColor: theme.palette.mode === 'dark' ? '#1A1C1E' : '#fff' }}>
      {
        tab === 'activity' ? <ActivityBannerSection handleOpenMintDialog={() => setOpenMintDialog(true)} /> : <BannerSection />
      }

      <Box className={classes.filterHeader} display='flex' alignItems='center' flexWrap='wrap' justifyContent='space-between'>
        <Box display='flex' alignItems='center' flexWrap='wrap'>
          <Box className={classes.searchField}>
            <CustomTextField
              placeholder='Search'
              endAdornment={<InputAdornment position="end"><img src={theme.palette.mode === 'dark' ? whiteSearchIcon : searchIcon} alt="" width={13.24} /></InputAdornment>}
            />
          </Box>
          <Box className={classes.selectBox}>
            <CustomSelect
              value={select}
              onChange={(e) => setSelect(e.target.value)}
              options={priceOptions}
              variant='greenFill'
              placeholder='Select Price'
            />
          </Box>
        </Box>

        <Box className={classes.tabs}>
          <CustomButton className={clsx({ [classes.inactive]: tab !== 'miners' })} variant={tab === 'miners' ? 'gradientFill' : 'gradientOutline'} onClick={() => setTab('miners')}>
            Miners
          </CustomButton>
          <CustomButton className={clsx({ [classes.inactive]: tab !== 'pass' })} variant={tab === 'pass' ? 'gradientFill' : 'gradientOutline'} onClick={() => setTab('pass')}>
            Founder Passes
          </CustomButton>
          <CustomButton className={clsx({ [classes.inactive]: tab !== 'activity' })} variant={tab === 'activity' ? 'gradientFill' : 'gradientOutline'} onClick={() => setTab('activity')}>
            Activity
          </CustomButton>
        </Box>
      </Box>

      {
        (tab === 'miners' || tab === 'pass') && (
          <Box>
            <Box className={classes.titleHeader} display='flex' alignItems='center' justifyContent='space-between'>
              <Typography variant='h4' fontWeight={600}>
                NFT Marketplace
              </Typography>

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
          </Box>
        )
      }
      {
        tab === 'activity' && (
          <ActivityTable />
        )
      }
      <NftMintingDialog 
        open={openMintDialog}
        handleClose={() => setOpenMintDialog(false)}
      />
    </ContensContainer>
  )
}

export default MarketplacePage;
