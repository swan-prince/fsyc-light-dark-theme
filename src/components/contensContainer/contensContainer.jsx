import React from 'react';
import { makeStyles } from "@mui/styles";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import styles from 'assets/jss/components/contentsContainerStyles';
const useStyles = makeStyles(styles);

const ContensContainer = (props) => {

  const { title, children, ...others} = props;
  const classes = useStyles();

  return (
    <Box className={classes.wrapper} {...others}>
      <Typography variant='h3' fontWeight={600} className={classes.pageTitle}>
        {title}
      </Typography>
      <Box>
        {children}
      </Box>
    </Box>
  )
}

export default ContensContainer;
