import heroImg from 'assets/img/hero-bg-1.png';

const mintingPageStyles = ((theme) => ({
  bannerSection: {
    background: 'linear-gradient(63.84deg, #01DE8E 0.8%, #000000 129.14%)',
    borderRadius: "8px",
    padding: '32px 80px 32px 0',
    minHeight: '402px',
    boxSizing: 'border-box',
    [theme.breakpoints.down('lg')]: {
      minHeight: '310px',
      padding: '24px 64px 24px 0'
    },
    [theme.breakpoints.down('md')]: {
      flexWrap: 'wrap',
      padding: '24px 26px 0'
    }
  },
  bannerInner: {  
    backgroundImage: `url(${heroImg})`,
    backgroundSize: '100% 100%',
    backgroundRepeat: 'no-repeat',
    borderRadius: '8px',    
    [theme.breakpoints.down('lg')]: {
      backgroundSize: 'cover',
      backgroundPosition: 'center center'
    },
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column-reverse',
      display: 'flex'
    }
  },
  bannerContents: {
    width: '47%',
    marginLeft: '46.5%',
    color: '#fff',
    zIndex: '2',
    '& h3': {
      fontSize: '32px',
      lineHeight: '38px',
      marginBottom: '14px'      
    },
    '& p': {
      fontSize: '13px',
      lineHeight: '16.3px'
    },
    '& h4': {
      fontSize: '22px',
      lineHeight: '26px',
      marginTop: '14px',
      marginBottom: '16px'
    },
    '& .MuiDivider-root': {
      margin: '17px 0 25px',
      borderColor: '#fff'
    },
    '& .MuiButtonBase-root': {
      fontSize: '16px',
      lineHeight: '20px',
      fontWeight: '600',
      marginTop: '22px',
      borderRadius: '8px'
    },
    [theme.breakpoints.down('lg')]: {
      width: '57.8%',
      '& h3': {
        fontSize: '24px',
        lineHeight: '29px',
        marginBottom: '11px'
      },
      '& p': {
        fontSize: '11px',
        lineHeight: '14px'
      },
      '& h4': {
        fontSize: '16px',
        lineHeight: '20px',
        marginBottom: '11px'
      },
      '& .MuiButtonBase-root': {
        marginTop: '18px'
      }
    },
    [theme.breakpoints.down('md')]: {
      width: '100%',
      marginLeft: '0'
    },
    [theme.breakpoints.down('sm')]: {
      '& h3': {
        fontSize: '20px',
        lineHeight: '24px'       
      },    
      '& h4': {
        fontSize: '15px',
        lineHeight: '18px',
        marginBottom: '15px',
        marginTop: '9px'
      },
      '& .MuiButtonBase-root': {
        marginTop: '15px',
        marginBottom: '11px',
        fontSize: '12px',
        lineHeight: '15px'
      }
    }
  },
  heroImg: {
    width: '51.9%',
    bottom: '0',
    left: '-7px',
    maxWidth: '566px',
    [theme.breakpoints.down('lg')]: {
      width: '400px'
    },
    [theme.breakpoints.down('md')]: {
      position: 'unset !important',
      marginLeft: 'auto',
      marginRight: 'auto'
    },
    [theme.breakpoints.down('sm')]: {
      width: '100%'
    }
  },
  contents: {
    marginTop: '25px'
  },
  header: {
    marginBottom: '44px',
    '& h4': {
      fontSize: '17px',
      lineHeight: '22px',
      color: theme.palette.mode === 'dark' ? '#fff' : '#2B6AD8'
    },
    [theme.breakpoints.down('sm')]: {
      marginBottom: '32px',
      '& h4': {
        fontSize: '15px',
        lineHeight: '18.7px'
      }
    }
  },
  selectBox: {
    width: '140px',
    marginRight: '12px',
    [theme.breakpoints.down('sm')]: {
      width: '115px',
      marginRight: '4px'
    }
  }
}));

export default mintingPageStyles;
