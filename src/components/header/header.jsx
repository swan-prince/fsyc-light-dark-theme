import React from 'react';
import clsx from 'clsx';
import { useTheme } from '@mui/material/styles';
import { makeStyles } from "@mui/styles";

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import InputAdornment from '@mui/material/InputAdornment';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';

import CustomTextField from 'components/customTextField';
import CustomButton from 'components/customButton';

import searchIcon from 'assets/img/search.png';
import plusIcon from 'assets/img/plus.png';
import plusWhiteIcon from 'assets/img/plus-white.png';
import chatIcon from 'assets/img/chat.png';
import notificationIcon from 'assets/img/notification.png';
import userIcon from 'assets/img/user-avatar.png';
import dashboardIcon from 'assets/img/dashboard-menu.png';
import lightLogoImg from 'assets/img/light-logo.png';
import darkLogoImg from 'assets/img/dark-logo.png';
import toggleIcon from 'assets/img/toggle.png';
import dashboardLightIcon from 'assets/img/dashboard-menu-light.png';
import buggerIcon from 'assets/img/Burger Menu.png';
import whiteSearchIcon from 'assets/img/search-white.png';

import styles from 'assets/jss/components/headerStyles';
const useStyles = makeStyles(styles);

const Header = (props) => {

  const { handleOpenMenuDrawer, handleOpenHamburgerDrawer, handleOpenConnectWallet } = props;
  const theme = useTheme();
  const classes = useStyles();

  return (
    <Box className={classes.header} display='flex' alignItems='center' flexWrap='wrap' justifyContent='space-between'>
      <Box className={classes.searchField}>
        <CustomTextField
          placeholder='Search'
          endAdornment={<InputAdornment position="end"><img src={theme.palette.mode === 'dark' ? whiteSearchIcon : searchIcon} alt="" width={13.24} /></InputAdornment>}
        />
      </Box>
      <Box display='flex' className={classes.btns} justifyContent='space-between'>
        <Box className={classes.discordBtn} sx={{ marginRight: '28px' }}>
          <CustomButton
            fullWidth
            variant='gradientFill'
            startIcon={<img src={theme.palette.mode === 'dark' ? plusIcon : plusWhiteIcon} alt='Connect Discord' />}
          >
            Connect Discord
          </CustomButton>
        </Box>
        <Box className={classes.walletBtn}>
          <CustomButton
            fullWidth
            variant='gradientFill'
            startIcon={<img src={theme.palette.mode === 'dark' ? plusIcon : plusWhiteIcon} alt='Connect Discord' />}
            onClick={handleOpenConnectWallet}
          >
            Connect Wallet
          </CustomButton>
        </Box>
      </Box>

      {/* <Box display='flex' alignItems='center' className={classes.rightIcons}>
        <Badge color="secondary" badgeContent={0} className={classes.badge}>
          <img src={chatIcon} alt='Chat' width={27.48} height={25.46} />
        </Badge>
        <Badge color="secondary" badgeContent={0} className={clsx(classes.badge, classes.notification)}>
          <img src={notificationIcon} alt='Chat' width={24} height={26.67} />
        </Badge>
        <Button className={classes.userBtn}>
          <img src={userIcon} alt="User" width='100%' height='100%' />
        </Button>
      </Box> */}

      <IconButton className={classes.menuToggleBtn} onClick={handleOpenMenuDrawer}>
        {
          theme.palette.mode === 'dark' ? (<img src={dashboardIcon} alt="Dashboard" width={30} />) : (
            <img src={dashboardLightIcon} alt="Dashboard" width={30} />
          )
        }
      </IconButton>
      <Box className={classes.logo}>
        <img src={theme.palette.mode === 'dark' ? darkLogoImg : lightLogoImg} alt="" width={168} height={45} />
      </Box>
      <IconButton className={classes.hamburgerBtn} onClick={handleOpenHamburgerDrawer}>
        <img src={theme.palette.mode === 'dark' ? toggleIcon : buggerIcon} alt="" width={36.4} />
      </IconButton>
    </Box>
  )
}

export default Header;
