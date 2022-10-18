import React from 'react';
import { makeStyles } from "@mui/styles";

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

import styles from 'assets/jss/components/paginationStyles';
const useStyles = makeStyles(styles);

const Pagination = (props) => {

  const { page, count, onChange } = props;
  const classes = useStyles();

  return (
    <Box className={classes.pagination} display='flex'>
      <Button disabled={page === 1} onClick={() => onChange(page - 1)}>
        <KeyboardArrowLeftIcon />
      </Button>
      <Button disabled={page === count} onClick={() => onChange(page + 1)}>
        <NavigateNextIcon />
      </Button>
    </Box>
  )
}

export default Pagination;
