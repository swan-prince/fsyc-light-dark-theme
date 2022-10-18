import React from 'react';
import { makeStyles } from "@mui/styles";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import GradientBox from 'components/gradientBox';
import CustomButton from 'components/customButton';

import styles from 'assets/jss/components/nftCardStyles';
const useStyles = makeStyles(styles);

const NftCard = (props) => {

  const { data, titleIcon } = props;
  const classes = useStyles();

  return (
    <GradientBox borderWidth='large'>
      <Box className={classes.contents}>
        <GradientBox borderWidth='small' className={classes.imgBox}>
          <img src={data.img} alt="" width='100%' />
        </GradientBox>
        <Box className={classes.details}>
          <Box display='flex' alignItems='center' justifyContent='space-between' mb={2} className={classes.title}>
            <Typography variant='h5' fontWeight={600} fontFamily='Inter'>
              {data.title}
            </Typography>
            {titleIcon}
          </Box>
          <Typography variant='h6' fontWeight={500}>
            {`Miner #${data.miner}`}
          </Typography>
          <Box display='flex' alignItems='center' justifyContent='space-between'>
            <Typography variant='body1' fontWeight={500}>
              Price
            </Typography>
            <Typography variant='body1' fontWeight={500}>
              {data.price}
            </Typography>
          </Box>
          <CustomButton variant='gradientFill' fullWidth>
            Place a Bid
          </CustomButton>
        </Box>
      </Box>
    </GradientBox>
  )
}

export default NftCard;
