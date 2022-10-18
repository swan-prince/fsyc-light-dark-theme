import React from 'react';
import { makeStyles } from "@mui/styles";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

import CustomButton from 'components/customButton';

import heroImg from 'assets/img/minting-hero.png';
import currencyImg from 'assets/img/currenty.png';
import kImg from 'assets/img/k.png';
import styles from 'assets/jss/views/nftViewPageStyles';
const useStyles = makeStyles(styles);

const BannerSection = (props) => {

  const { handleOpenBuyDialog } = props;
  const classes = useStyles();

  return (
    <Box className={classes.bannerSection} position='relative'>
      <Box className={classes.bannerInner}>
        <Box className={classes.heroImg} position='absolute' display='flex'>
          <img src={heroImg} alt="" width='100%' />
        </Box>
        <Box className={classes.bannerContents} my='auto'>
          <Typography variant='body1' color='#fff' fontFamily='Inter' className={classes.subTitle}>
            Kadena Mining Club
          </Typography>
          <Typography variant='h3' fontWeight={700} fontFamily='Inter' color='#fff'>
            Miner #3782
          </Typography>
          <Divider />
          <Box display='flex' alignItems='center' className={classes.currency}>
            <img src={currencyImg} alt="" />
            <Typography variant='body1' color='#fff' fontFamily='Inter'>
              Current Price
            </Typography>
          </Box>
          <Box className={classes.priceVal} display='flex' alignItems='center' justifyContent='center'>
            <img src={kImg} alt="" />
            <Typography variant='body1' fontWeight={700} fontFamily='Inter' color='#fff'>
              164
            </Typography>
          </Box>
          <Typography variant='body1' color='#fff' fontFamily='Inter' className={classes.ownerBy} fontWeight={500}>
            Owned by: kcc62eab4
          </Typography>

          <CustomButton variant='whiteFill' onClick={handleOpenBuyDialog}>
            BUY NOW
          </CustomButton>
        </Box>
      </Box>
    </Box>
  )
}

export default BannerSection;
