import React from 'react';
import clsx from 'clsx';
import { makeStyles } from "@mui/styles";

import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';

import CustomButton from 'components/customButton';
import closeIcon from 'assets/img/close-green.png';
import styles from 'assets/jss/components/dialogStyles';
const useStyles = makeStyles(styles);

const TransactionResultDialog = (props) => {

  const { open, handleClose } = props;
  const classes = useStyles();

  return (
    <Dialog onClose={() => {}} open={open} className={classes.dialog}>
      <Box className={classes.dialogContents}>
        <Box className={clsx(classes.header, classes.mintHeader)} position='relative'>
          <Typography variant='h6' fontWeight={800} fontFamily='Inter'>
            Transaction Result
          </Typography>
          <IconButton className={classes.closeBtn} onClick={handleClose}>
            <img src={closeIcon} width={14} height={14} alt="" />
          </IconButton>
        </Box>

        <Box>
          <Typography variant='body1' align='center'>
            Transaction Success!
          </Typography>
          <Box className={classes.divider} my={4}></Box>
          <Typography variant='body1' align='center'>
            Click <Link href='/' underline='none'>here</Link>  to see transaction.
          </Typography>
          <Box textAlign='center' mt={4} className={classes.mintBtn}>
            <CustomButton variant='greenFill' onClick={handleClose}>
              Close
            </CustomButton>
          </Box>
        </Box>
      </Box>
    </Dialog>
  )
}

export default TransactionResultDialog;
