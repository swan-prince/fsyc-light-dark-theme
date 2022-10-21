import React from 'react';
import { makeStyles } from "@mui/styles";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import CustomButton from 'components/customButton';

import heroImg from 'assets/img/minting-hero.png';
import styles from 'assets/jss/views/nftFarmPageStyles';
const useStyles = makeStyles(styles);

const BannerSection = (props) => {

  const { handleOpenTurnOn, handleOpenTurnOff } = props;
  const classes = useStyles();

  return (
    <Box className={classes.bannerSection} position='relative'>
      <Box className={classes.bannerInner}>
        <Box className={classes.heroImg} position='absolute' display='flex'>
          <img src={heroImg} alt="" width='100%' />
        </Box>
        <Box className={classes.bannerContents} my='auto'>
          <Typography variant='h3' fontWeight={700} fontFamily='Inter' color='#fff'>
            Real Time Hashrate
          </Typography>
          <Box className={classes.thVal} display='flex' alignItems='center' justifyContent='center'>
            <Typography variant='body1' fontWeight={700} fontFamily='Inter' color='#fff'>
              0.00 TH/s
            </Typography>
          </Box>
          <Box className={classes.bannerBtns}>
            <CustomButton variant='gradientFill' onClick={handleOpenTurnOn}>
              Turn On All
            </CustomButton>
            <CustomButton variant='gradientFill' onClick={handleOpenTurnOff}>
              Turn Off All
            </CustomButton>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default BannerSection;
