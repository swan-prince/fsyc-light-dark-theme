import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import { makeStyles } from "@mui/styles";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import ContensContainer from 'components/contensContainer';
import BannerSection from './bannerSection';
import GradientBox from 'components/gradientBox';
import CustomButton from 'components/customButton';
import InventoryDialog from 'components/inventoryDialog';

import downloadImg from 'assets/img/download.png';
import downloadDarkImg from 'assets/img/download-black.png';
import styles from 'assets/jss/views/nftViewPageStyles';
const useStyles = makeStyles(styles);

const NftViewPage = () => {

  const theme = useTheme();
  const classes = useStyles();

  const [openBuyDialog, setOpenBuyDialog] = useState(false);

  return (
    <ContensContainer title='NFT VIEW' sx={{ backgroundColor: theme.palette.mode === 'dark' ? '#1A1C1E' : '#fff' }}>
      <BannerSection handleOpenBuyDialog={() => setOpenBuyDialog(true)} />
      <GradientBox className={classes.contents} borderWidth='small'>
        <Box className={classes.contentsInner} display='flex' flexWrap='wrap' justifyContent='space-between'>
          <Box className={classes.leftContents} position='relative'>
            <Box className={classes.dataBox} position='relative' display='flex'>
              <Box className={classes.dataCell}>
                <Typography variant='body1' fontFamily='Inter' fontWeight={400}>
                  Hash Rate
                </Typography>
                <Typography variant='body1' fontFamily='Inter' fontWeight={300}>
                  800 GH/s
                </Typography>
              </Box>
              <Box className={classes.dataCell}>
                <Typography variant='body1' fontFamily='Inter' fontWeight={400}>
                  Back Gear
                </Typography>
                <Typography variant='body1' fontFamily='Inter' fontWeight={300}>
                  KMC Flag
                </Typography>
              </Box>
              <Box className={classes.dataCell}>
                <Typography variant='body1' fontFamily='Inter' fontWeight={400}>
                  Background
                </Typography>
                <Typography variant='body1' fontFamily='Inter' fontWeight={300}>
                  Inventor
                </Typography>
              </Box>
              <Box className={classes.dataCell}>
                <Typography variant='body1' fontFamily='Inter' fontWeight={400}>
                  Eye
                </Typography>
                <Typography variant='body1' fontFamily='Inter' fontWeight={300}>
                  Wind Turbine Fan
                </Typography>
              </Box>
            </Box>

            <Box className={classes.dataBox} position='relative' display='flex'>
              <Box className={classes.dataCell}>
                <Typography variant='body1' fontFamily='Inter' fontWeight={400}>
                  Head
                </Typography>
                <Typography variant='body1' fontFamily='Inter' fontWeight={300}>
                  Aluminum
                </Typography>
              </Box>
              <Box className={classes.dataCell}>
                <Typography variant='body1' fontFamily='Inter' fontWeight={400}>
                  Head Gear
                </Typography>
                <Typography variant='body1' fontFamily='Inter' fontWeight={300}>
                  Blue Scholar Cap
                </Typography>
              </Box>
              <Box className={classes.dataCell}>
                <Typography variant='body1' fontFamily='Inter' fontWeight={400}>
                  Mouth
                </Typography>
                <Typography variant='body1' fontFamily='Inter' fontWeight={300}>
                  LFG
                </Typography>
              </Box>
              <Box className={classes.dataCell}>
                <Typography variant='body1' fontFamily='Inter' fontWeight={400}>
                  Necklace
                </Typography>
                <Typography variant='body1' fontFamily='Inter' fontWeight={300}>
                  Kaddex Pendant Necklace
                </Typography>
              </Box>
            </Box>

            <Box className={classes.dataBox} position='relative' display='flex' mb={0}>
              <Box className={classes.dataCell}>
                <Typography variant='body1' fontFamily='Inter' fontWeight={400}>
                  Offhand
                </Typography>
                <Typography variant='body1' fontFamily='Inter' fontWeight={300}>
                  Digital Wallet
                </Typography>
              </Box>
              <Box className={classes.dataCell}>
                <Typography variant='body1' fontFamily='Inter' fontWeight={400}>
                  Outfit
                </Typography>
                <Typography variant='body1' fontFamily='Inter' fontWeight={300}>
                  Green Jacket with Chain
                </Typography>
              </Box>
              <Box className={classes.dataCell}>
                <Typography variant='body1' fontFamily='Inter' fontWeight={400}>
                  Side Gear
                </Typography>
                <Typography variant='body1' fontFamily='Inter' fontWeight={300}>
                  None
                </Typography>
              </Box>
              <Box className={classes.dataCell}>
                <Typography variant='body1' fontFamily='Inter' fontWeight={400}>
                  Special
                </Typography>
                <Typography variant='body1' fontFamily='Inter' fontWeight={300}>
                  None
                </Typography>
              </Box>
            </Box>
          </Box>

          <Box className={classes.rightContents} position='relative'>
            <Box>
              <CustomButton variant='gradientOutline'>
                Image
                <img src={theme.palette.mode === 'dark' ? downloadImg : downloadDarkImg} alt='' />
              </CustomButton>
              <CustomButton variant='gradientOutline'>
                MP4
                <img src={theme.palette.mode === 'dark' ? downloadImg : downloadDarkImg} alt='' />
              </CustomButton>
            </Box>
          </Box>
        </Box>
      </GradientBox>
      <InventoryDialog 
        open={openBuyDialog}
        handleClose={() => setOpenBuyDialog(false)}
        title='Buy NFT'
      />
    </ContensContainer>
  )
}

export default NftViewPage;
