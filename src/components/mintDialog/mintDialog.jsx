import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from "@mui/styles";

import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

import CustomButton from 'components/customButton';
import closeIcon from 'assets/img/close-green.png';
import kadenaIcon from 'assets/img/kend.png';
import styles from 'assets/jss/components/dialogStyles';
const useStyles = makeStyles(styles);

const MintDialog = (props) => {

  const { open, handleClose, handleMint } = props;
  const classes = useStyles();

  const [miners, setMiners] = useState(1);
  const [total, setTotal] = useState(0)

  return (
    <Dialog onClose={() => {}} open={open} className={classes.dialog}>
      <Box className={classes.dialogContents}>
        <Box className={clsx(classes.header, classes.mintHeader)} position='relative'>
          <Typography variant='h6' fontWeight={800} fontFamily='Inter'>
            Mint
          </Typography>
          <IconButton className={classes.closeBtn} onClick={handleClose}>
            <img src={closeIcon} width={14} height={14} alt="" />
          </IconButton>
        </Box>
        <Box>
          <Box className={clsx(classes.mintForm, classes.minersField)} display='flex' alignItems='center' justifyContent='space-between'>
            <Typography variant='body1'>
              Miners
            </Typography>
            <OutlinedInput
              value={miners}
              readOnly
              onChange={(e) => {
                if (Number.isInteger(e.target.value)) {
                  setMiners(e.target.value)
                }
              }}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton onClick={() => {
                    if (miners > 1) {
                      setMiners(miners - 1);
                    }
                  }}>
                    <RemoveCircleOutlineIcon />
                  </IconButton>
                </InputAdornment>
              }
              startAdornment={
                <InputAdornment position="start">
                  <IconButton onClick={() => setMiners(miners + 1)}>
                    <AddCircleOutlineIcon />
                  </IconButton>
                </InputAdornment>
              }
            />
          </Box>
          <Box className={classes.divider}></Box>
          <Box className={clsx(classes.mintForm, classes.mintTotalField)} display='flex' alignItems='center' justifyContent='space-between'>
            <Typography variant='body1'>
              Total Amount
            </Typography>
            <OutlinedInput
              value={total}
              readOnly
              onChange={(e) => {
                if (!isNaN(e.target.value)) {
                  setTotal(e.target.value)
                }
              }}
              endAdornment={
                <Box display='flex'>
                  <img src={kadenaIcon} alt='' width={24} height={24} />
                </Box>
              }
            />
          </Box>
          <Box className={classes.divider} mb={4}></Box>
          <Box px={2} className={classes.mintBtn}>
            <CustomButton variant='greenFill' fullWidth onClick={handleMint}>
              Mint
            </CustomButton>
          </Box>
        </Box>
      </Box>
    </Dialog>
  )
}

export default MintDialog;
