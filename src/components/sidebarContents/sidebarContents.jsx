import React from 'react';
import clsx from 'clsx';
import { useTheme } from '@mui/material/styles';
import { useLocation, useNavigate } from 'react-router-dom';
import { makeStyles } from "@mui/styles";

import Box from '@mui/material/Box';
import Switch from '@mui/material/Switch';
import Link from '@mui/material/Link';

import menuLinks from 'assets/mockdata/menuLinks';
import lightLogoImg from 'assets/img/light-logo.png';
import darkLogoImg from 'assets/img/dark-logo.png';
import themeModeImg from 'assets/img/theme-mode.png';

import styles from 'assets/jss/components/sidebarContentsStyles';
const useStyles = makeStyles(styles);

const SidebarContents = (props) => {

  const { changeTheme, isDarkTheme } = props;
  const classes = useStyles();
  const theme = useTheme();

  const locatin = useLocation();
  const navigate = useNavigate();

  return (
    <Box className={classes.sidebarContents}>
      <Box className={classes.logo} textAlign='center'>
        <img src={isDarkTheme ? darkLogoImg : lightLogoImg} alt="FSYC" width={182} />
      </Box>
      <Box className={classes.menus} display='flex' flexDirection='column'>
        {
          menuLinks.map((menuGroup, index) => (
            <Box key={index} className={clsx({ [classes.linksGroup]: index !== 0 })}>
              {
                menuGroup.map((link) => (
                  <Link
                    underline='none'
                    variant='button'
                    href={link.url}
                    className={clsx(classes.menuLink, { [classes.active]: locatin.pathname === link.url })}
                    key={link.title}
                    onClick={(e) => {
                      e.preventDefault();
                      navigate(link.url);
                    }}
                  >
                    <Box display='flex' alignItems='center' justifyContent='center'>
                      <img src={link.icon} className={clsx({ 'dark-icon': !!link.lightIcon })} alt={link.title} />
                      {
                        link.lightIcon && (
                          <img src={link.lightIcon} className='light-icon' alt={link.title} />
                        )
                      }
                    </Box>
                    {link.title}
                  </Link>
                ))
              }
            </Box>
          ))
        }
        <Link
          underline='none'
          variant='button'
          href='/'
          className={clsx(classes.menuLink, classes.themeToggleLink)}
          onClick={(e) => {
            e.preventDefault();
            changeTheme();
          }}
        >
          <Box display='flex' alignItems='center' justifyContent='center'>
            <img src={themeModeImg} alt='' />
          </Box>
          {
            theme.palette.mode === 'dark' ? 'Light Mode' : 'Dark mode'
          }
          
          <Switch
            checked={isDarkTheme}
            onChange={changeTheme}
            inputProps={{ 'aria-label': 'controlled' }}
            className={classes.themeModeSwtich}
          />
        </Link>
      </Box>
    </Box>
  )
}

export default SidebarContents;
