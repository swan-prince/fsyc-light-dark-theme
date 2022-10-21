import React from 'react';
import { makeStyles } from "@mui/styles";

import OutlinedInput from '@mui/material/OutlinedInput';
import Box from '@mui/material/Box';

import styles from 'assets/jss/components/textFieldStyles';
const useStyles = makeStyles(styles);

const CustomTextField = (props) => {

  const classes = useStyles();

  return (
    <Box className={classes.textField} position='relative'>
      <OutlinedInput fullWidth {...props} />
    </Box>
  )
}

export default CustomTextField;
