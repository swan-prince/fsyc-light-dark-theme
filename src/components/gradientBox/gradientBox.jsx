import React from 'react';
import clsx from 'clsx';
import { makeStyles } from "@mui/styles";

import Box from '@mui/material/Box';

import styles from 'assets/jss/components/gradientBoxStyles';
const useStyles = makeStyles(styles);

const GradientBox = (props) => {

  const { children, className, borderWidth } = props;
  const classes = useStyles();

  const classNames = clsx(
    classes.wrapper,
    {
      [className]: className      
    }
  );

  const backgroundClassNames = clsx(
    'gradient-bg',
    classes.background,
    {
      [classes.largeBorderWidth]: borderWidth === 'large',
      [classes.smallBorderWidth]: borderWidth === 'small',
    }
  )

  return (
    <Box position='relative' className={classNames}>
      <Box position='relative' className={classes.contents}>
        {children}
      </Box>
      <Box position='absolute' className={backgroundClassNames}></Box>
    </Box>
  )
}

export default GradientBox;

