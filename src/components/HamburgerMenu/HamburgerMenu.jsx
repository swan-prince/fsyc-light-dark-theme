import React from 'react';
import { useTheme } from '@mui/material/styles';
import { makeStyles } from "@mui/styles";

import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import InputAdornment from '@mui/material/InputAdornment';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';

import CustomTextField from 'components/customTextField';
import CustomButton from 'components/customButton';

import searchIcon from 'assets/img/search.png';
import whiteSearchIcon from 'assets/img/search-white.png';
import chatIcon from 'assets/img/chat.png';
import notificationIcon from 'assets/img/notification.png';
import userIcon from 'assets/img/user-avatar.png';
import plusIcon from 'assets/img/plus.png';
import plusWhiteIcon from 'assets/img/plus-white.png';
import closeIcon from 'assets/img/close-green.png';

import styles from 'assets/jss/components/drawerStyles';
const useStyles = makeStyles(styles);

const HamburgerMenu = (props) => {

  const { open, handleClose, handleOpenConnectWallet } = props;
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Drawer
      anchor='left'
      open={open}
      onClose={handleClose}
      className={classes.hamburgerDrawer}
    >
      <Box className={classes.hamburgerContents}>
        <Box display='flex'>
          <IconButton onClick={handleClose} sx={{marginLeft: 'auto'}}>
            <img src={closeIcon} width={14} height={14} alt="" />
          </IconButton>
        </Box>
        {/* <Box display='flex' alignItems="center" justifyContent='space-between' sx={{ padding: '0px 10px' }}>
          <Button className={classes.userBtn}>
            <img src={userIcon} alt="User" width='100%' height='100%' />
          </Button>
          <Badge color="secondary" badgeContent={0} className={classes.badge} sx={{ marginLeft: 'auto', marginRight: '14px' }}>
            <img src={chatIcon} alt='Chat' width={27} height={27} />
          </Badge>
          <Badge color="secondary" badgeContent={0} className={classes.badge}>
            <img src={notificationIcon} alt='Chat' width={27} height={27} />
          </Badge>
        </Box> */}

        <Box sx={{ marginTop: '47px', marginBottom: '44px' }}>
          <CustomTextField
            placeholder='Search'
            endAdornment={
              <InputAdornment position="end">
                <img src={theme.palette.mode === 'dark' ? whiteSearchIcon : searchIcon} alt="" width={13.24} />
              </InputAdornment>
            }
          />
        </Box>
        <Box sx={{ margin: '0 14px' }}>
          <CustomButton
            fullWidth
            variant='gradientFill'
            startIcon={<img src={theme.palette.mode === 'dark' ? plusIcon : plusWhiteIcon} alt='Connect Discord' />}
          >
            Connect Discord
          </CustomButton>
          <CustomButton
            fullWidth
            variant='gradientOutline'
            sx={{ marginTop: '23px' }}
            startIcon={<img src={plusIcon} alt='Connect Discord' />}
            onClick={handleOpenConnectWallet}
          >
            Connect Wallet
          </CustomButton>
        </Box>
      </Box>
    </Drawer>
  )
}

export default HamburgerMenu;
