import React from 'react';
import { useTheme } from '@mui/material/styles';
import { makeStyles } from "@mui/styles";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import ContensContainer from 'components/ContensContainer';
import ProjectNewsCard from 'components/ProjectNewsCard';
import GradientBox from 'components/GradientBox';

import styles from 'assets/jss/views/mintingPageStyles';
const useStyles = makeStyles(styles);

const MintingPage = () => {

  const theme = useTheme();
  const classes = useStyles();

  return (
    <ContensContainer title='NFT MINT' sx={{ backgroundColor: theme.palette.mode === 'dark' ? '#1A1C1E' : '#fff' }}>
      MintingPage
    </ContensContainer>
  )
}

export default MintingPage;
