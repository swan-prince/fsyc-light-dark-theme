import React from 'react';
import { makeStyles } from "@mui/styles";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import GradientBox from 'components/gradientBox';

import styles from 'assets/jss/components/benefitCardStyles';
const useStyles = makeStyles(styles);

const BenefitCard = (props) => {

  const classes = useStyles();

  return (
    <GradientBox borderWidth='large'>
      <Box className={classes.benefitCard}>
        <Typography variant='h6' fontWeight={600}>
          FREE FSYC MINT
        </Typography>
        <Typography variant='body1' fontWeight={500}>
          Each pre-Sale purchase will be equivalent to purchasing a FSYC mint. At the time of mint these will be redeemable for 1 FSYC NFT."
        </Typography>
      </Box>
    </GradientBox>
  )
}

export default BenefitCard;
