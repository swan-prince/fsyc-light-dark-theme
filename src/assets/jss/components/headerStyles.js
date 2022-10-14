const headerStyles = ((theme) => ({
  header: {
    padding: '39px 50px',
    backgroundColor: theme.palette.mode === 'dark' ? '#000' : '#fff',
    boxShadow: theme.palette.mode === 'dark' ? '#000' : '0px 4px 10px rgba(0, 0, 0, 0.15)',
    '@media screen and (max-width: 1350px)': {
      padding: '20px 50px'
    },
    [theme.breakpoints.down('md')]: {
      padding: '25px 22px'
    }
  },
  searchField: {
    width: '37.75%',
    '@media screen and (max-width: 1350px)': {
      width: '100%',
      marginBottom: '16px'
    },
    [theme.breakpoints.down('md')]: {
      display: 'none'
    }
  },
  discordBtn: {
    width: 'calc(50% - 14px)',
    '@media screen and (max-width: 1350px)': {
      marginRight: '20px !important',
      width: '180px'
    }
  },
  walletBtn: {
    width: 'calc(50% - 14px)',
    '@media screen and (max-width: 1350px)': {
      width: '170px'
    }
  },
  userBtn: {
    '&.MuiButtonBase-root': {
      width: '56px',
      height: '56px',
      padding: '0',
      borderRadius: '6px',
      background: 'linear-gradient(180deg, #2B6AD8 0%, #8B41AB 100%)',
      minWidth: 'unset',
      boxShadow: '0px 4px 10px rgba(1, 222, 142, 0.25)'
    },
    [theme.breakpoints.down('lg')]: {     
      '&.MuiButtonBase-root': {
        width: '31px',
        height: '36px'
      }
    }
  },
  badge: {
    cursor: 'pointer'
  },
  notification: {
    marginLeft: '42px',
    marginRight: '42px',
    [theme.breakpoints.down('lg')]: {
      marginLeft: '30px',
      marginRight: '30px'
    }
  },
  btns: {
    width: '38.75%',
    '@media screen and (max-width: 1350px)': {
      width: 'auto'
    },
    [theme.breakpoints.down('md')]: {
      display: 'none !important'
    }
  },
  rightIcons: {
    [theme.breakpoints.down('md')]: {
      display: 'none !important'
    }
  },
  menuToggleBtn: {
    [theme.breakpoints.up('md')]: {
      display: 'none !important'
    }
  },
  hamburgerBtn: {
    [theme.breakpoints.up('md')]: {
      display: 'none !important'
    }
  },
  logo: {
    [theme.breakpoints.up('md')]: {
      display: 'none !important'
    }
  }
}));

export default headerStyles;
