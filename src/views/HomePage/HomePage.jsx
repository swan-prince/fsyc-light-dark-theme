import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import { makeStyles } from "@mui/styles";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import CustomButton from 'components/CustomButton';
import ContensContainer from 'components/ContensContainer';
import ProjectNewsCard from 'components/ProjectNewsCard';
import GradientBox from 'components/GradientBox';

import projectNewsData from 'assets/mockdata/projectNewsData';
import heroImg from 'assets/img/hero-1.png';
import kadenaIcon from 'assets/img/kadena-icon.png';
import styles from 'assets/jss/views/homePageStyles';
const useStyles = makeStyles(styles);

const HomePage = () => {

  const theme = useTheme();
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <ContensContainer title='About The Project' sx={{ backgroundColor: theme.palette.mode === 'dark' ? '#1A1C1E' : '#fff' }}>
      <Box className={classes.bannerBox} position='relative'>
        <Box display='flex' className={classes.bannerInner} position='relative'>
          <Box className={classes.heroImg} display='flex'>
            <img src={heroImg} alt="" width='100%' />
          </Box>
          <Box className={classes.bannerContent}>
            <Typography variant='h3' fontWeight={700}>
              Full Spend Yacht Club
            </Typography>
            <Typography variant='body1'>
              Full Spend Yacht Club is a Kadena mining NFT that focuses on maximizing profitability per dollar spent.
              We do this by putting 90% of our mint funds directly into mining and utilizing the latest immersion cooling technology to allow us to maximize the profit from each miner.
              Full Spend Yacht Club is a collection of 9,999 unique NFTs that are generated randomly from over 100 unique traits. By staking your NFT,
              you can rent real ASIC miners that mine rewards directly into your wallet.
              Help control the future of the project by utilizing our DAO voting platform and vote on the future actions of the project!
            </Typography>
            <Box display='flex' justifyContent='space-between' className={classes.detailRow}>
              <Box>
                <Typography variant='h6' fontWeight={700} fontFamily='Inter'>
                  NFTs
                </Typography>
                <Typography variant='body1' fontWeight={500} fontFamily='Inter'>
                  $51,0062
                </Typography>
              </Box>
              <Box>
                <Typography variant='h6' fontWeight={700} fontFamily='Inter'>
                  Owners
                </Typography>
                <Typography variant='body1' fontWeight={500} fontFamily='Inter'>
                  51,0062 KDA
                </Typography>
              </Box>
              <CustomButton variant={theme.palette.mode === 'dark' ? 'gradientFill' : 'whiteFill'} className={classes.mintBtn}>
                Mint
              </CustomButton>
            </Box>
          </Box>
        </Box>
        <Box className={classes.borderBox} position='absolute'></Box>
      </Box>

      <Box display='flex' flexWrap='wrap' justifyContent='space-between'>
        <Box className={classes.projectNews}>
          <Typography variant='h3' className={classes.sectionTitle} fontWeight={600}>
            Project News
          </Typography>
          <Grid container rowSpacing='30px' columnSpacing='18px'>
            {
              projectNewsData.map((cell, index) => (
                <Grid item xs={6} sm={6} md={6} lg={6} xl={4} key={index}>
                  <ProjectNewsCard data={cell} />
                </Grid>
              ))
            }
          </Grid>
        </Box>

        <Box className={classes.wallet}>
          <Typography variant='h3' className={classes.sectionTitle} fontWeight={600}>
            MY WALLET
          </Typography>
          <GradientBox borderWidth='large'>
            <Box className={classes.walletInner}>
              <Typography variant='body1' align='center' fontFamily='Inter' fontWeight={500}>
                Your Balance
              </Typography>
              <Typography variant='h3' align='center' fontFamily='Inter' fontWeight={700}>
                <span>KDA </span>
                21.533.10
              </Typography>
              <Box>
                <Button
                  id="basic-button"
                  aria-controls={open ? 'basic-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                  onClick={handleClick}
                >
                  <img src={kadenaIcon} width={26.6} alt="" />
                  Dashboard
                  <KeyboardArrowDownIcon />
                </Button>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    'aria-labelledby': 'basic-button',
                  }}
                >
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                  <MenuItem onClick={handleClose}>My account</MenuItem>
                  <MenuItem onClick={handleClose}>Logout</MenuItem>
                </Menu>
              </Box>
            </Box>
          </GradientBox>
        </Box>
      </Box>
    </ContensContainer>
  )
}

export default HomePage;
