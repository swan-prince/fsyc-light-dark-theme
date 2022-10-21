import React, { useState } from 'react';
import { slice } from 'lodash';
import { useTheme } from '@mui/material/styles';
import { makeStyles } from "@mui/styles";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import ContensContainer from 'components/contensContainer';
import BannerSection from './bannerSection';
import CustomSelect from 'components/customSelect';
import Pagination from 'components/pagination';
import NftCard from 'components/nftCard';
import NftMintingDialog from 'components/nftMintingDialog';

import { mintingOptions } from 'assets/mockdata/selectOptionsData';
import nftCardsData from 'assets/mockdata/nftCardsData';

import heartIcon from 'assets/img/heart.png';
import styles from 'assets/jss/views/mintingPageStyles';
const useStyles = makeStyles(styles);

const MintingPage = () => {

  const theme = useTheme();
  const classes = useStyles();

  const [openMintDialog, setOpenMintDialog] = useState(false);
  const [mintingType, setMintingType] = useState('popular');
  const [page, setPage] = useState(1);
	const [startIndex, setStartIndex] = useState(0);
	const [endIndex, setEndIndex] = useState(4);

  const handleChangePagination = (page) => {	
		setPage(page);
		setStartIndex((page - 1) * 4);
		setEndIndex(page * 4);
	}

  return (
    <ContensContainer title='NFT MINT' sx={{ backgroundColor: theme.palette.mode === 'dark' ? '#1A1C1E' : '#fff' }}>
      <BannerSection handleOpenMintDialog={() => setOpenMintDialog(true)} />
      <Box className={classes.contents}>
        <Box className={classes.header} display='flex' alignItems='center' justifyContent='space-between'>
          <Typography variant='h4' fontWeight={600}>
            Featured NFTs
          </Typography>

          <Box display='flex' alignItems='center' flexWrap='wrap'>
            <Box className={classes.selectBox}>
              <CustomSelect
                value={mintingType}
                onChange={(e) => setMintingType(e.target.value)}
                options={mintingOptions}
              />
            </Box>
            <Pagination
              page={page}
              count={Math.ceil(nftCardsData.length / 4)}
              onChange={handleChangePagination}
            />
          </Box>
        </Box>

        <Grid container spacing={2} columnSpacing={{ lg: 4, md: 3, sm: 3, xs: '14px' }}>
          {
            slice(nftCardsData, startIndex, endIndex).map((nft, index) => (
              <Grid item xs={6} sm={6} md={4} lg={3} key={index}>
                <NftCard 
                  data={nft} 
                  titleIcon={ <img src={heartIcon} alt="" />}
                />
              </Grid>
            ))
          }
        </Grid>
      </Box>

      <NftMintingDialog 
        open={openMintDialog}
        handleClose={() => setOpenMintDialog(false)}
      />
    </ContensContainer>
  )
}

export default MintingPage;
