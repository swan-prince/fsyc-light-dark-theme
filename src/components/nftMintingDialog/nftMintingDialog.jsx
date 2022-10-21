import React from 'react';
import clsx from 'clsx';
import { makeStyles } from "@mui/styles";

import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';

import closeIcon from 'assets/img/close-green.png';
import kadenaIcon from 'assets/img/kend.png';
import ethereumIcon from 'assets/img/kadena-icon.png';
import creditCardImg from 'assets/img/credit-card.png';
import usdcImg from 'assets/img/kwusdc.png';
import styles from 'assets/jss/components/dialogStyles';
const useStyles = makeStyles(styles);

const NftMintingDialog = (props) => {

  const { open, handleClose } = props;
  const classes = useStyles();

  return (
    <Dialog onClose={() => { }} open={open} className={classes.dialog}>
      <Box className={classes.dialogContents}>
        <Box className={classes.header} position='relative'>
          <Typography variant='h6' fontWeight={800} fontFamily='Inter'>
            Mint by using
          </Typography>
          <IconButton className={classes.closeBtn} onClick={handleClose}>
            <img src={closeIcon} width={14} height={14} alt="" />
          </IconButton>
        </Box>
        <Typography variant='body1'>
          To mint with Ethereum, you need to connect MetaMask and one of the two Kadena Wallets, X-Wallet or Zelcore
        </Typography>
        <Box>
          <Button fullWidth className={classes.walletBtn} onClick={handleClose}>
            Kadena
            <Box display='flex'>
              <img src={kadenaIcon} alt="" width={38} />
            </Box>
          </Button>
          <Box className={classes.divider}></Box>
          <Button fullWidth className={clsx(classes.walletBtn)} onClick={handleClose}>
            Ethereum
            <Box display='flex' alignItems='center' justifyContent='center'>
              <img src={ethereumIcon} alt="" width={27} height={27} />
            </Box>
          </Button>
          <Box className={classes.divider}></Box>
          <Button fullWidth className={classes.walletBtn} onClick={handleClose}>
            Credit Card
            <Box display='flex' alignItems='center' justifyContent='center'>
              <img src={creditCardImg} alt="" width={27} height={20} />
            </Box>
          </Button>
          <Box className={classes.divider}></Box>
          <Button fullWidth className={classes.walletBtn} onClick={handleClose}>
            kwUSDC
            <Box display='flex' alignItems='center' justifyContent='center'>
              <img src={usdcImg} alt="" width={38} height={38} />
            </Box>
          </Button>
        </Box>
      </Box>
    </Dialog>
  )
}

export default NftMintingDialog;
