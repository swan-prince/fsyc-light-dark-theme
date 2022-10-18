import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import { makeStyles } from "@mui/styles";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import CustomButton from 'components/customButton';
import ContensContainer from 'components/contensContainer';
import GradientBox from 'components/gradientBox';
import BenefitCard from 'components/benefitCard';
import MintDialog from 'components/mintDialog';
import TransactionResultDialog from 'components/transactionResultDialog';

import benefitsData from 'assets/mockdata/benefitsData';
import heroImg from 'assets/img/pre-sale-hero.png';
import styles from 'assets/jss/views/preSalePageStyles';
const useStyles = makeStyles(styles);

const PreSalePage = () => {

  const theme = useTheme();
  const classes = useStyles();

  const [openMintDialog, setOpenMintDialog] = useState(false);
  const [openTransactionResult, setOpenTransactionResult] = useState(false);

  return (
    <ContensContainer title='Pre-Sale' sx={{ backgroundColor: theme.palette.mode === 'dark' ? '#1A1C1E' : '#fff' }}>
      <Box className={classes.bannerSection}>
        <Box className={classes.bannerSectionInner} position='relative' display='flex'>
          <Box className={classes.bannerTextCell} my='auto' position='relative'>
            <Typography variant='h3' fontWeight={700} fontFamily='Inter'>
              Pre-Sale Mint
            </Typography>
            <Typography variant='body1'>
              Full Spend Yacht Club will allow the early purchase of 2500 NFTs at a reduced cost of $299.
              The goal of the presale is to raise funds to launch of our genesis batch of miners that will fund the final developments of the project.
              By doing so, we maximize our purchasing power for miners that produce rewards for holders without having to sacrifice any developments.
              The presale mining phase will last 3-6 months and will withhold 50% of the mining power for developments. After this phase, 100% of the mining power will be distributed to holders.
              In return for withholding 50% of mining power for the development of the project, we are offering numerous benefits on top of the $100 discount.
              Please read below for more details
            </Typography>
            <CustomButton variant='greenFill' onClick={() => setOpenMintDialog(true)}>
              Click here to Mint
            </CustomButton>
          </Box>
          <Box position='absolute' className={classes.heroImg} display='flex'>
            <img src={heroImg} alt="" width='100%' height='100%' />
          </Box>
        </Box>
      </Box>
      <Box className={classes.benefitsSection}>
        <Typography variant='h4' fontWeight={600}>
          Pre-Sale Benefits
        </Typography>
        <GradientBox borderWidth='large'>
          <Box className={classes.benefitsList}>
            <Grid container spacing={2} columnSpacing='11px'>
              {
                benefitsData.map((cell, index) => (
                  <Grid item sm={12} md={4} lg={4} key={index}>
                    <BenefitCard data={cell} />
                  </Grid>
                ))
              }
            </Grid>
          </Box>
        </GradientBox>
      </Box>
      <MintDialog 
        open={openMintDialog}
        handleClose={() => setOpenMintDialog(false)}
        handleMint={() => {
          setOpenMintDialog(false);
          setOpenTransactionResult(true);
        }}
      />
      <TransactionResultDialog 
       open={openTransactionResult}
       handleClose={() => setOpenTransactionResult(false)}
      />
    </ContensContainer>
  )
}

export default PreSalePage;
