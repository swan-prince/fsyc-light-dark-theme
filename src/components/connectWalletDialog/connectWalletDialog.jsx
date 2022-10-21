import React from 'react';
import clsx from 'clsx';
import { makeStyles } from "@mui/styles";

import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';

import closeIcon from 'assets/img/close-green.png';
import xWalletIcon from 'assets/img/x-wallet.png';
import metamaskIcon from 'assets/img/metamask.png';
import zelcoreIcon from 'assets/img/zelcore.png';
import styles from 'assets/jss/components/dialogStyles';
const useStyles = makeStyles(styles);

const ConnectWalletDialog = (props) => {

  const { open, handleClose } = props;
  const classes = useStyles();

  return (
    <Dialog onClose={() => {}} open={open} className={classes.dialog}>
      <Box className={classes.dialogContents}>
        <Box className={classes.header} position='relative'>
          <Typography variant='h6' fontWeight={800} fontFamily='Inter'>
            Connect your wallet
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
            X-Wallet
            <Box display='flex'>
              <img src={xWalletIcon} alt="" />
            </Box>
          </Button>
          <Button fullWidth className={clsx(classes.walletBtn, classes.zelcoreBtn)} onClick={handleClose}>
            Zelcore
            <Box display='flex'>
              <img src={zelcoreIcon} alt="" />
            </Box>
          </Button>
          <Button fullWidth className={classes.walletBtn} onClick={handleClose}>
            MetaMask
            <Box display='flex' alignItems='center' justifyContent='center'>
              <img src={metamaskIcon} alt="" width={30} height={30} />
            </Box>
          </Button>
        </Box>
      </Box>
    </Dialog>
  )
}

export default ConnectWalletDialog;

