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

import ContensContainer from 'components/contensContainer';
import ProjectNewsCard from 'components/projectNewsCard';
import GradientBox from 'components/gradientBox';
import BannerSection from './bannerSection';

import projectNewsData from 'assets/mockdata/projectNewsData';
import tokensData from 'assets/mockdata/tokensData';
import kadenaIcon from 'assets/img/kadena-icon.png';
import earningIcon from 'assets/img/earnings.png';
import earningGraph from 'assets/img/earning-graph.png';
import nftOwnedIcon from 'assets/img/nft-owned.png';
import nftGraph from 'assets/img/nft-graph.png';
import styles from 'assets/jss/views/homePageStyles';
const useStyles = makeStyles(styles);

const HomePage = () => {

  const theme = useTheme();
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState(null);
  const [token, setToken] = useState({ name: 'Kadena', unit: 'KDA' })

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <ContensContainer title='About The Project' sx={{ backgroundColor: theme.palette.mode === 'dark' ? '#1A1C1E' : '#fff' }}>
      <BannerSection />

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
              <Box textAlign='center'>
                <Button
                  id="basic-button"
                  aria-controls={Boolean(anchorEl) ? 'basic-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={Boolean(anchorEl) ? 'true' : undefined}
                  onClick={handleClick}
                  className={classes.tokenDropdown}
                >
                  <img src={kadenaIcon} width={26.6} alt="" />
                  <span>{token.name}&nbsp;</span> {token.unit}
                  <KeyboardArrowDownIcon />
                </Button>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                  MenuListProps={{
                    'aria-labelledby': 'basic-button',
                  }}
                >
                  {
                    tokensData.map((cell) => (
                      <MenuItem
                        key={cell.name}
                        onClick={() => {
                          setToken(cell);
                          handleClose();
                        }}
                        className={classes.tokenItem}
                      >
                        <img src={kadenaIcon} width={26.6} alt="" />
                        <Typography variant='body1'>
                          <span>{cell.name}&nbsp;</span>
                          {cell.unit}
                        </Typography>
                      </MenuItem>
                    ))
                  }
                </Menu>
              </Box>

              <Box>
                <Grid container spacing={2} columnSpacing={4}>
                  <Grid item xs={12} sm={6}>
                    <Box className={classes.incomingBox}>
                      <Box display='flex' alignItems='center' className={classes.incomingHeader} mb={1}>
                        <Box display='flex' alignItems='center' justifyContent='center' sx={{background: 'rgba(13, 220, 133, 0.12)'}}>
                          <img src={earningIcon} alt="" />
                        </Box>
                        <Typography variant='body1' fontWeight={500}>
                          Earnings
                        </Typography>
                      </Box>
                      <Typography variant='h6' align='center' fontFamily='Inter' color='#34D178'>
                        7.048 <span>&nbsp;KDA</span>
                      </Typography>
                      <Box display='flex' mx='auto' maxWidth={300}>
                        <img src={earningGraph} alt="" width='100%' />
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Box className={classes.incomingBox}>
                      <Box display='flex' alignItems='center' className={classes.incomingHeader} mb={1}>
                        <Box display='flex' alignItems='center' justifyContent='center' sx={{background: 'rgba(255, 0, 0, 0.12)'}}>
                          <img src={nftOwnedIcon} alt="" />
                        </Box>
                        <Typography variant='body1' fontWeight={500}>
                          NFTs Owned
                        </Typography>
                      </Box>
                      <Typography variant='h6' align='center' fontFamily='Inter' color='#8B41AB'>
                        2.013 <span>&nbsp;NFTs</span>
                      </Typography>
                      <Box display='flex' mx='auto' maxWidth={300}>
                        <img src={nftGraph} alt="" width='100%' />
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </GradientBox>
        </Box>
      </Box>
    </ContensContainer>
  )
}

export default HomePage;
