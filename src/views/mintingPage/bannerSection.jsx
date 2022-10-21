import React from 'react';
import { makeStyles } from "@mui/styles";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

import CustomButton from 'components/customButton';

import heroImg from 'assets/img/minting-hero.png';
import styles from 'assets/jss/views/mintingPageStyles';
const useStyles = makeStyles(styles);

const BannerSection = (props) => {
 
  const { handleOpenMintDialog } = props;
  const classes = useStyles();

  return (
    <Box className={classes.bannerSection} position='relative' display='flex'>
      <Box className={classes.bannerInner}>
        <Box className={classes.heroImg} position='absolute' display='flex'>
          <img src={heroImg} alt="" width='100%' />
        </Box>
        <Box className={classes.bannerContents} my='auto'>
          <Typography variant='h3' fontWeight={700} fontFamily='Inter'>
            Real Mining, Real Rewards
          </Typography>
          <Typography variant='body1'>
            Each NFT is a contract to buy 800 GH/s worth of Kadena mining power.
            Your miner will be hosted in a completely renewable facility, allowing you to mine without the hassle of doing it at home.
          </Typography>
          <Typography variant='h4' fontWeight={700} fontFamily='Inter'>
            Mint with KDA, ETH, or Credit Card
          </Typography>
          <Typography variant='body1'>
            To fulfill our mission of mining for all, we are accepting a variety of payment methods including KDA, ETH, kwUSDC, and Credit Cards.
            For assistance minting, please join our Discord and we will support you.
          </Typography>
          <Divider />
          <Typography variant='body1'>
            X-Wallet by Kaddex is our preferred way to mint with Kadena. Get it here.
          </Typography>
          <CustomButton variant='whiteFill' onClick={handleOpenMintDialog}>
            Click here to Mint
          </CustomButton>
        </Box>
      </Box>
    </Box>
  )
}

export default BannerSection;

