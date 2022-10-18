import React from 'react';
import { makeStyles } from "@mui/styles";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import heroImg from 'assets/img/market-hero.png';

import styles from 'assets/jss/views/marketplacePageStyles';
const useStyles = makeStyles(styles);

const BannerSection = () => {

  const classes = useStyles();

  return (
    <Box className={classes.bannerSection} position='relative'>
      <Box className={classes.bannerInner}>
        <Box className={classes.heroImg} position='absolute' display='flex'>
          <img src={heroImg} alt="" width='100%' />
        </Box>
        <Box className={classes.bannerContents} my='auto'>
          <Typography variant='h3' fontWeight={700} fontFamily='Inter' color='#fff'>
            Kadena Mining Club - Official NFTs
          </Typography>
          <Box display='flex' flexWrap='wrap'>
            <Box className={classes.headerDataCell}>
              <Typography variant='body1' fontFamily='Inter'>
                Items
              </Typography>
              <Typography variant='h6' fontFamily='Inter' fontWeight={700}>
                5440
              </Typography>
            </Box>
            <Box className={classes.headerDataCell}>
              <Typography variant='body1' fontFamily='Inter'>
                Owners
              </Typography>
              <Typography variant='h6' fontFamily='Inter' fontWeight={700}>
                726
              </Typography>
            </Box>
            <Box className={classes.headerDataCell}>
              <Typography variant='body1' fontFamily='Inter'>
                Volume
              </Typography>
              <Typography variant='h6' fontFamily='Inter' fontWeight={700}>
                88853
              </Typography>
            </Box>
            <Box className={classes.headerDataCell}>
              <Typography variant='body1' fontFamily='Inter'>
                Floor Price
              </Typography>
              <Typography variant='h6' fontFamily='Inter' fontWeight={700}>
                165
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default BannerSection;
