import React, { useState } from 'react';
import clsx from 'clsx';
import { useTheme } from '@mui/material/styles';
import { makeStyles } from "@mui/styles";

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import InputAdornment from '@mui/material/InputAdornment';

import ContensContainer from 'components/contensContainer';
import BannerSection from './bannerSection';
import NftCard from 'components/nftCard';
import CustomTextField from 'components/customTextField';
import CustomSelect from 'components/customSelect';
import CustomButton from 'components/customButton';
import InventoryDialog from 'components/inventoryDialog';

import nftCardsData from 'assets/mockdata/nftCardsData';
import { inventoryOptions } from 'assets/mockdata/selectOptionsData';

import searchIcon from 'assets/img/search.png';
import whiteSearchIcon from 'assets/img/search-white.png';
import styles from 'assets/jss/views/nftFarmPageStyles';

const useStyles = makeStyles(styles);

const NftFarmPage = () => {

  const theme = useTheme();
  const classes = useStyles();

  const [select, setSelect] = useState('total');
  const [tab, setTab] = useState('working');
  const [openTurnOn, setOpenTurnOn] = useState(false);
  const [openTurnOff, setOpenTurnOff] = useState(false);

  return (
    <ContensContainer title='NFT FARM' sx={{ backgroundColor: theme.palette.mode === 'dark' ? '#1A1C1E' : '#fff' }}>
      <BannerSection 
        handleOpenTurnOn={() => setOpenTurnOn(true)} 
        handleOpenTurnOff={() => setOpenTurnOff(true)} 
      />
      <Box className={classes.header} display='flex' alignItems='center' flexWrap='wrap' justifyContent='space-between'>
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
              options={inventoryOptions}
              variant='greenFill'
            />
          </Box>
        </Box>

        <Box className={classes.tabs}>
          <CustomButton className={clsx({ [classes.inactive]: tab !== 'working' })} variant={tab === 'working' ? 'gradientFill' : 'gradientOutline'} onClick={() => setTab('working')}>
            Working: 0
          </CustomButton>
          <CustomButton className={clsx({ [classes.inactive]: tab !== 'on' })} variant={tab === 'on' ? 'gradientFill' : 'gradientOutline'} onClick={() => setTab('on')}>
            On Marketplace: 0
          </CustomButton>
          <CustomButton className={clsx({ [classes.inactive]: tab !== 'off' })} variant={tab === 'off' ? 'gradientFill' : 'gradientOutline'} onClick={() => setTab('off')}>
            Offline: 0
          </CustomButton>
        </Box>
      </Box>

      <Grid container spacing={2} columnSpacing={{ lg: 4, md: 3, sm: 3, xs: '14px' }}>
        {
          nftCardsData.map((nft, index) => (
            <Grid item xs={6} sm={6} md={4} lg={3} key={index}>
              <NftCard
                data={nft}
              />
            </Grid>
          ))
        }
      </Grid>
      <InventoryDialog 
        open={openTurnOn || openTurnOff}
        handleClose={() => {
          setOpenTurnOn(false);
          setOpenTurnOff(false);
        }}
        title={openTurnOn ? 'Turn On 0 Miners' : 'Turn Off 0 Miners'}
      />
    </ContensContainer>
  )
}

export default NftFarmPage;
