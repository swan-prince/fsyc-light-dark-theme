import React from 'react';
import { makeStyles } from "@mui/styles";

import Drawer from '@mui/material/Drawer';

import SidebarContents from 'components/sidebarContents';

import styles from 'assets/jss/components/drawerStyles';
const useStyles = makeStyles(styles);

const MenuDrawer = (props) => {

  const { open, handleClose, changeTheme, isDarkTheme } = props;
  const classes = useStyles();  

  return (
    <Drawer
      anchor='left'
      open={open}
      onClose={handleClose}
      className={classes.menuDrawer}
    >
      <SidebarContents
        changeTheme={changeTheme}
        isDarkTheme={isDarkTheme}
      />
    </Drawer>
  )
}

export default MenuDrawer;
