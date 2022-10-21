import React, { useState } from 'react';

import { makeStyles } from "@mui/styles";

import Box from '@mui/material/Box';

import SidebarContents from 'components/sidebarContents';
import Header from 'components/header';
import MenuDrawer from 'components/menuDrawer';
import HamburgerMenu from 'components/hamburgerMenu';
import ConnectWalletDialog from 'components/connectWalletDialog';

import styles from 'assets/jss/components/layoutStyles';
const useStyles = makeStyles(styles);

const Layout = (props) => {

  const { children, changeTheme, isDarkTheme } = props;
  const classes = useStyles();

  const [openMenu, setOpenMenu] = useState(false);
  const [openHamburger, setOpenHamburger] = useState(false);
  const [openConnectWallet, setOpenConnectWallet] = useState(false);

  return (
    <Box display='flex' flexWrap='wrap'>
      <Box className={classes.sidebar} position='relative'>
        <SidebarContents changeTheme={changeTheme} isDarkTheme={isDarkTheme} />
      </Box>
      <Box className={classes.contents} display='flex' flexDirection='column'>
        <Header
          handleOpenMenuDrawer={() => setOpenMenu(true)}
          handleOpenHamburgerDrawer={() => setOpenHamburger(true)}
          handleOpenConnectWallet={() => setOpenConnectWallet(true)}
        />
        <Box className={classes.contentsInner}>
          {children}
        </Box>
      </Box>
      <MenuDrawer
        open={openMenu}
        handleClose={() => setOpenMenu(false)}
        changeTheme={changeTheme}
        isDarkTheme={isDarkTheme}
      />
      <HamburgerMenu
        open={openHamburger}
        handleClose={() => setOpenHamburger(false)}
        handleOpenConnectWallet={() => setOpenConnectWallet(true)}
      />
      <ConnectWalletDialog
        open={openConnectWallet}
        handleClose={() => setOpenConnectWallet(false)}
      />
    </Box>
  )
}

export default Layout;
