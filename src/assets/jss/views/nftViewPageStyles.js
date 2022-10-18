import heroImg from 'assets/img/hero-bg-1.png';
import graphBg from 'assets/img/graph-bg.png';

const nftViewPageStyles = ((theme) => ({
  bannerSection: {
    background: 'linear-gradient(63.84deg, #01DE8E 0.8%, #2B6AD8 129.14%)',
    borderRadius: "8px",    
    boxSizing: 'border-box',   
  },
  bannerInner: {  
    minHeight: '402px',
    backgroundImage: `url(${heroImg})`,
    backgroundSize: '100% 100%',
    backgroundRepeat: 'no-repeat',
    borderRadius: '8px',
    padding: '53px 0',
    boxSizing: 'border-box',
    [theme.breakpoints.down('lg')]: {
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      minHeight: '200px',
      padding: '30px 0'
    },
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column-reverse',
      display: 'flex',
      padding: '30px 20px 0'
    }
  },
  bannerContents: {
    marginLeft: '53.58%',
    '& h3': {
      fontSize: '32px',
      lineHeight: '38px',      
    },
    '& .MuiDivider-root': {
      borderColor: '#01DE8E',
      width: '238px',
      margin: '12px 0 22px'
    },
    '& .MuiButtonBase-root': {
      fontSize: '16px',
      fontWeight: '700',
      borderRadius: '6px'
    },
    [theme.breakpoints.down('md')]: {
      width: '100%',
      marginLeft: '0'
    },
    [theme.breakpoints.down('sm')]: {
      '& h3': {
        fontSize: '20px',
        lineHeight: '24px',
        marginBottom: '24px'
      },
      '& .MuiButtonBase-root': {
        fontSize: '12px',
        lineHeight: '15px',
      },
      '& .MuiDivider-root': {       
        width: '100%',
        margin: '12px 0 22px'
      },
    }
  },
  heroImg: {
    maxWidth: '566px',
    left: '0',
    bottom: '0',
    width: '52%',
    [theme.breakpoints.down('md')]: {
      position: 'unset !important',
      marginLeft: 'auto',
      marginRight: 'auto'
    },
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      maxWidth: '400px'
    }
  },
  subTitle: {
    '&.MuiTypography-root': {
      fontSize: '14px',
      lineHeight: '17px',
      marginBottom: '9px'
    },    
  },  
  currency: {
    marginBottom: '18px',
    '& img': {
      marginRight: '18.55px'
    },
    '& p': {
      fontSize: '14px',
      lineHeight: '17px'
    }
  },
  priceVal: {
    width: '135px',
    height: '44px',
    backgroundColor: '#01DE8E',
    border: '1px solid #FFFFFF',
    borderRadius: '44px',
    marginBottom: '20px',
    '& img': {
      marginRight: '21px'
    },
    '& p': {
      fontSize: '25px',
      lineHeight: '30px'
    },    
    [theme.breakpoints.down('sm')]: {
      height: '30px',
      width: '100px',
      marginBottom: '10px',
      '& img': {
        width: '16px'
      },
      '& p': {
        fontSize: "11px",
        lineHeight: '14px'
      }
    }
  },
  ownerBy: {
    '&.MuiTypography-root': {
      fontSize: '13px',
      lineHeight: '15px',
      width: 'fit-content',
      paddingBottom: '12px',
      borderBottom: '1px solid #01DE8E',
      marginBottom: '23px'
    }    
  },
  contents: {
    marginTop: '40px',    
  },
  contentsInner: {
    padding: '35px 0 28px 53px',
    backgroundColor: theme.palette.mode === 'dark' ? '#000' : '#fff',
    backgroundImage: `url(${graphBg})`,
    backgroundWidth: '100% 100%',
    backgroundRepeat: 'no-repeat',
    borderRadius: '8px',
    [theme.breakpoints.down("lg")]: {
      padding: '20px 0 16px 30px'
    },
    [theme.breakpoints.down('md')]: {
      padding: '20px 16px'
    }
  },
  leftContents: {
    width: '61.1%',
    [theme.breakpoints.down('md')]: {
      width: '100%'
    },  
  },
  dataBox: {
    marginBottom: '55px',
    '&::before': {
      position: 'absolute',
      width: '100%',
      height: '2px',
      content: `''`,
      background: 'linear-gradient(right, #01DE8E, #2B6AD8)',
      left: '0',
      top: '54px',      
    },
    [theme.breakpoints.down('lg')]: {
      marginBottom: '30px',
      '&::before': {
        top: '45px'
      }
    },
    [theme.breakpoints.down('sm')]: {
      flexWrap: 'wrap',
      '&::before': {
        top: 'unset',
        bottom: '-15px'
      }
    }
  },
  dataCell: {
    width: '25%',
    boxSizing: 'border-box',    
    '& p': {
      fontSize: '16px',
      lineHeight: '20px',
      color: theme.palette.mode === 'dark' ? '#fff' : '#000',
      padding: '15px 16px 19px'
    },
    '& p:first-child': {
      color: '#01DE8E'
    },
    [theme.breakpoints.down('lg')]: {
      '& p': {
        fontSize: '14px',
        lineHeight: '18px',      
        padding: '12px 12px 15px'
      },
    },
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      '& p': {
        padding: '6px 0 8px',
        fontSize: '12px',
        lineHeight: '15px'
      }
    }
  },
  rightContents: {
    width: '30%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '& > .MuiBox-root': {
      display: 'flex',
      flexDirection: 'column'
    },
    '& .MuiButtonBase-root': {
      margin: '17px 0',
      fontSize: '14px',
      lineHeight: '18px',
      padding: '9px 12px',
      width: '94px',
      '& img': {
        marginLeft: 'auto'
      },
      '& .btn-text': {
        display: 'flex',
        alignItems: 'center',
        width: '100%'
      }
    },
    '&::before': {
      width: '2px',
      height: '100%',
      position: 'absolute',
      content: `''`,
      background: 'linear-gradient(top, #01DE8E, #2B6AD8)',
      left: '0',
      top: '0'
    },
    [theme.breakpoints.down('md')]: {
      width: '100%',
      '&::before': {
        display: 'none'
      },
      '& .MuiButtonBase-root': {
        margin: '8px 0',
        fontSize: '12px',
        lineHeight: '15px'       
      },
    },
    [theme.breakpoints.down('sm')]: {
      marginTop: '35px'
    }
  }
}));

export default nftViewPageStyles;
