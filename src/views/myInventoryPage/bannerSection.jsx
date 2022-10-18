import React from 'react';
import { makeStyles } from "@mui/styles";

import Box from '@mui/material/Box';

import CustomButton from 'components/customButton';

import fsycImg from 'assets/img/fsyc-logo.png';
import plusIcon from 'assets/img/blue-plus.png';
import heroImg1 from 'assets/img/inventory-hero-1.png';
import heroImg2 from 'assets/img/inventory-hero-2.png';
import styles from 'assets/jss/views/inventoryPageStyles';
const useStyles = makeStyles(styles);

const BannerSection = () => {

  const classes = useStyles();

  return (
    <Box className={classes.bannerSection} position='relative'>
      <Box className={classes.bannerInner} position='relative'>
        <Box className={classes.logoBox} mx='auto'>
          <img src={fsycImg} alt="" width='100%' />
          <CustomButton variant='whiteFill' startIcon={<img src={plusIcon} alt="" />}>            
            Connect Wallet
          </CustomButton>
        </Box>
        <Box className={classes.hero1} display='flex'>
          <img src={heroImg1} alt="" width='100%' />
        </Box>
        <Box className={classes.hero2} display='flex'>
          <img src={heroImg2} alt="" width='100%' />
        </Box>
      </Box>
    </Box>
  )
}

export default BannerSection;
