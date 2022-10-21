import React from 'react';
import { useTheme } from '@mui/material/styles';
import { makeStyles } from "@mui/styles";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import CustomButton from 'components/customButton';

import heroImg from 'assets/img/hero-1.png';
import styles from 'assets/jss/views/homePageStyles';
const useStyles = makeStyles(styles);

const BannerSection = () => {

  const theme = useTheme();
  const classes = useStyles();

  return (
    <Box className={classes.bannerBox} position='relative'>
      <Box display='flex' className={classes.bannerInner} position='relative'>
        <Box className={classes.heroImg} display='flex'>
          <img src={heroImg} alt="" width='100%' />
        </Box>
        <Box className={classes.bannerContent}>
          <Typography variant='h3' fontWeight={700}>
            Full Spend Yacht Club
          </Typography>
          <Typography variant='body1'>
            Full Spend Yacht Club is a Kadena mining NFT that focuses on maximizing profitability per dollar spent.
            We do this by putting 90% of our mint funds directly into mining and utilizing the latest immersion cooling technology to allow us to maximize the profit from each miner.
            Full Spend Yacht Club is a collection of 9,999 unique NFTs that are generated randomly from over 100 unique traits. By staking your NFT,
            you can rent real ASIC miners that mine rewards directly into your wallet.
            Help control the future of the project by utilizing our DAO voting platform and vote on the future actions of the project!
          </Typography>
          <Box display='flex' justifyContent='space-between' className={classes.detailRow}>
            <Box>
              <Typography variant='h6' fontWeight={700} fontFamily='Inter'>
                NFTs
              </Typography>
              <Typography variant='body1' fontWeight={500} fontFamily='Inter'>
                $51,0062
              </Typography>
            </Box>
            <Box>
              <Typography variant='h6' fontWeight={700} fontFamily='Inter'>
                Owners
              </Typography>
              <Typography variant='body1' fontWeight={500} fontFamily='Inter'>
                51,0062 KDA
              </Typography>
            </Box>
            <CustomButton variant={theme.palette.mode === 'dark' ? 'gradientFill' : 'whiteFill'} className={classes.mintBtn}>
              Mint
            </CustomButton>
          </Box>
        </Box>
      </Box>
      <Box className={classes.borderBox} position='absolute'></Box>
    </Box>
  )
}

export default BannerSection;
