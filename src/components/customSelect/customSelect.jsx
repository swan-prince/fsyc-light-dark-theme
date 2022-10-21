import React from 'react';
import clsx from 'clsx';
import { makeStyles } from "@mui/styles";

import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

import GradientBox from 'components/gradientBox';

import styles from 'assets/jss/components/selectStyles';
const useStyles = makeStyles(styles);

const CustomSelect = (props) => {

  const { placeholder, variant, options, ...selectProps } = props;
  const classes = useStyles(); 

  const classNames = clsx(
    classes.select,
    {
      [classes.greenBg]: variant === 'greenFill'
    }
  )

  return (
    <GradientBox borderWidth='large' className={classNames}>
      <Select
        fullWidth
        displayEmpty
        {...selectProps}
      >
        {
          placeholder && (
            <MenuItem disabled value="">
              {placeholder}
            </MenuItem>
          )
        }
        {
          options.map((option) => (
            <MenuItem value={option.data} key={option.data}>{option.label}</MenuItem>
          ))
        }
      </Select>
    </GradientBox>
  )
}

export default CustomSelect;
