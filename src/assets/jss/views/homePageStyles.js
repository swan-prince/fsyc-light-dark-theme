import heroImg from 'assets/img/hero-bg-1.png';

const homePageStyles = ((theme) => ({  
  heroImg: {
    width: '36.5%',
    marginTop: '-4px',
    [theme.breakpoints.down('lg')]: {
      maxWidth: '326px',
      width: '100%',
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: '20px',
      display: 'flex'
    }
  },
  bannerBox: {    
    borderRadius: '8px',    
  },
  bannerContent: {
    marginLeft: '22px',
    marginTop: 'auto',
    marginBottom: 'auto',
    width: '54.1%',    
    '& h3': {
      fontSize: '30px',
      lineHeight: '36px',
      color: '#fff',
      marginBottom: '15px'
    },
    '& p': {
      fontSize: '13px',
      lineHeight: '16.3px',
      color: '#fff',
      marginBottom: '32px'
    },
    [theme.breakpoints.down('lg')]: {
      width: '100%',
      marginLeft: '0'
    },
    [theme.breakpoints.down('sm')]: {
      '& h3': {
        fontSize: '20px',
        lineHeight: '24px',
        marginBottom: '12px'
      },
      '& p': {
        fontSize: '11px',
        lineHeight: '13.7px'
      }
    }
  },
  borderBox: {
    width: 'calc(100% + 2px)',
    height: 'calc(100% + 2px)',
    background: 'linear-gradient(to right, #2B6AD8, #01DE8E)',
    borderRadius: '8px',
    left: '-1px',
    top: '-1px'
  },
  bannerInner: {
    background: theme.palette.mode === 'dark' ? '#000' : 'linear-gradient(63.84deg, #01DE8E 0.8%, #2B6AD8 129.14%)',
    backgroundImage: `url(${heroImg})`,
    backgroundSize: '100% 100%',
    backgroundRepeat: 'no-repeat',
    borderRadius: '8px',
    zIndex: '2',
    [theme.breakpoints.down('lg')]: {
      flexDirection: 'column-reverse',
      padding: '24px 24px 0'
    }
  },
  detailRow: {
    borderTop: theme.palette.mode === 'dark' ? '1px solid #01DE8E' : '1px solid #fff',
    paddingTop: '11px',
    '& h6': {
      fontSize: '18px',
      lineHeight: '22px',
      marginBottom: '8px',
      color: theme.palette.mode === 'dark' ? '#01DE8E' : '#fff'
    },
    '& p': {
      fontSize: '13px',
      lineHeight: '16px'
    },
    [theme.breakpoints.down('sm')]: {
      '& h6': {
        fontSize: '14px',
        lineHeight: '18px'
      },
      '& p': {
        fontSize: '11px',
        lineHeight: '14px'
      }
    }
  },
  mintBtn: {
    width: '86px',
    '&.MuiButtonBase-root': {
      fontSize: '15px',
      fontWeight: '600'
    },
    [theme.breakpoints.down('sm')]: {
      '&.MuiButtonBase-root': {
        fontSize: '12px'       
      },
    }
  },
  projectNews: {
    marginTop: '20px',
    width: 'calc((100% - 30px) * 0.74)',
    [theme.breakpoints.down('lg')]: {
      width: '100%'
    }
  },
  sectionTitle: {
    '&.MuiTypography-root': {
      fontSize: '22px',
      lineHeight: '27px',
      marginBottom: '34px',
      color: theme.palette.mode === 'dark' ? '#fff' : '#2B6AD8',
    }
  },
  wallet: {
    marginTop: '20px',
    width: 'calc((100% - 30px) * 0.26)',
    [theme.breakpoints.down('lg')]: {
      marginTop: '40px',
      width: '100%'
    }
  },
  walletInner: {
    padding: '28px 16px 8px',
    backgroundColor: theme.palette.mode === 'dark' ? '#000' : '#fff',
    borderRadius: '8px',
    color: theme.palette.mode === 'dark' ? '#fff' : '#000',
    '& > p': {
      fontSize: '16px',
      lineHeight: '20px',
      marginBottom: '12px'
    },
    '& > h3': {
      fontSize: '36px',
      lineHeight: '44px',
      marginBottom: '25px',
      '& span': {
        fontSize: '16px',
        lineHeight: '20px'
      }
    }
  },
  tokenDropdown: {
    width: '68%',
    paddingLeft: '0',
    paddingRight: '0',    
    maxWidth: '300px',
    '&.MuiButtonBase-root': {
      justifyContent: 'unset',
      textTransform: 'none',
      fontFamily: 'Inter',
      fontSize: '15.6px',
      color: theme.palette.mode === 'dark' ? '#fff' : '#000',
      lineHeight: '19px',
      '& > img': {
        marginRight: '16.4px'
      },
      '& .MuiSvgIcon-root': {
        marginLeft: 'auto'
      },
      '& > span': {
        color: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.6)' : 'rgba(0, 0, 0, 0.6)',
      }
    }
  },
  tokenItem: {
    '& img': {
      marginRight: '16.4px'
    },
    '& .MuiTypography-root': {
      fontSize: '15.6px',
    }
  },
  incomingBox: {
    marginTop: '40px',
    '& h6': {
      fontSize: '32px',
      lineHeight: '38px',
      fontWeight: '700',
      marginBottom: '16px',
      '& span': {
        fontSize: '12px',
        lineHeight: '14.5px',
        color: theme.palette.mode === 'dark' ? '#fff' : '#000',
      }
    }
  },
  incomingHeader: {
    '& .MuiBox-root': {
      width: '41px',
      height: '41px',
      borderRadius: '50%',      
      marginRight: '16px'
    },
    '& p': {
      fontSize: '14px',
      lineHeight: '18px',
      color: '#A9A9A9'
    }
  }
}));

export default homePageStyles;
