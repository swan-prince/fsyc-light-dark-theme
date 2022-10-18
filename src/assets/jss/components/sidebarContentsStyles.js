const sidebarContentsStyles = ((theme) => ({
  sidebarContents: {
    backgroundColor: theme.palette.mode === 'dark' ? '#000' : '#fff',
    minHeight: '100vh',
    boxShadow: theme.palette.mode === 'dark' ? '0px 4px 10px rgba(0, 0, 0, 0.15)' : '0px 4px 10px rgba(0, 0, 0, 0.15)',
    paddingTop: '36px',
    paddingBottom: '170px',
    height: '100%',
    boxSizing: 'border-box',
    [theme.breakpoints.down('md')]: {
      width: '244px',
      paddingTop: '50px',
      boxShadow: 'none',
      paddingBottom: '50px',
      minHeight: 'unset'
    }
  },
  logo: {
    marginBottom: '52px',
    [theme.breakpoints.down('md')]: {
      display: 'none'
    }
  },
  menus: {
    paddingRight: '18px'
  },
  menuLink: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: '34px',
    height: '47px',
    width: '100%',
    boxSizing: 'border-box',
    '&.MuiLink-root': {
      textTransform: 'none',
      fontSize: '16px',
      lineHeight: '20px',
      fontWeight: '600',
      color: theme.palette.mode === 'dark' ? '#fff' : '#2B6AD8',
      '& .dark-icon': {
        display: theme.palette.mode === 'dark' ? 'block' : 'none'
      },
      '& .light-icon': {
        display: theme.palette.mode === 'dark' ? 'none' : 'block'
      },
      '&:hover': {
        backgroundColor: theme.palette.mode === 'dark' ? '#FFFFFF' : '#0DBCA4',
        color: theme.palette.mode === 'dark' ? '#2B6AD8' : '#fff',
        borderRadius: '0px 100px 100px 0px',
        '& .dark-icon': {
          display: theme.palette.mode === 'dark' ? 'none' : 'block'
        },
        '& .light-icon': {
          display: theme.palette.mode === 'dark' ? 'block' : 'none'
        },
      }
    },
    '& .MuiBox-root': {
      marginRight: '9px',
      width: '42px'
    },
    [theme.breakpoints.down('md')]: {
      paddingLeft: '20px'   
    }
  },
  linksGroup: {
    paddingTop: '30px',
    marginTop: '30px',
    position: 'relative',
    '&::before': {
      top: '0',
      left: '25px',
      content: `''`,
      position: 'absolute',
      height: '1px',
      background: '#B3B3B3',
      width: 'calc(100% - 25px)'
    },
    [theme.breakpoints.down('md')]: {
      paddingTop: '8px',
      marginTop: '8px',
    }
  },
  themeModeSwtich: {
    marginLeft: 'auto',
    '&.MuiSwitch-root': {
      padding: '0',
      width: '34px',
      height: '15.3px'
    },
    '& .MuiButtonBase-root': {
      padding: '0',
      top: '1.65px',
      left: '1.87px'
    },
    '& .MuiSwitch-switchBase.Mui-checked': {
      transform: 'translateX(18.26px)'
    },
    '& .MuiSwitch-thumb': {
      width: '12px',
      height: '12px',
      backgroundColor: '#fff',
      boxShadow: 'none'
    },
    '& .MuiSwitch-switchBase.Mui-checked+.MuiSwitch-track': {
      background: 'linear-gradient(255.75deg, #8B41AB 0.58%, #2B6AD8 88.64%)'
    },
    '& .MuiSwitch-track': {
      background: 'linear-gradient(254.94deg, #01DE8E 8.27%, #2B6AD8 88.77%)'
    }
  },
  themeToggleLink: {
    '&.MuiLink-root:hover': {
      color: theme.palette.mode === 'dark' ? '#fff' : '#2B6AD8',
      backgroundColor: 'unset'
    }
  },
  active: {
    backgroundColor: theme.palette.mode === 'dark' ? '#FFFFFF' : '#0DBCA4',    
    borderRadius: '0px 100px 100px 0px',
    '&.MuiLink-root': {
      color: theme.palette.mode === 'dark' ? '#2B6AD8' : '#fff',
    },
    '& .dark-icon': {
      display: theme.palette.mode === 'dark' ? 'none !important' : 'block !important'
    },
    '& .light-icon': {
      display: theme.palette.mode === 'dark' ? 'block !important' : 'none !important'
    }
  }
}));

export default sidebarContentsStyles;
