import React from 'react';
import clsx from 'clsx';
import { makeStyles } from "@mui/styles";

import Button from '@mui/material/Button';

import styles from 'assets/jss/components/buttonStyles';
const useStyles = makeStyles(styles);

const CustomButton = (props) => {

  const { children, className, variant, ...others} = props;
  const classes = useStyles();

  const classNames = clsx(
    classes.btn,
    {
      [className]: className,
      [classes.gradientFill]: variant === 'gradientFill',
      [classes.gradientOutline]: variant === 'gradientOutline',
      [classes.whiteFill]: variant === 'whiteFill',
      [classes.greenFill]: variant === 'greenFill'
    }
  )

  return (
    <Button {...others} variant='contained' className={classNames}>
      <span className='btn-text'>{children}</span>
    </Button>
  )
}

export default CustomButton;
