import heroImg from 'assets/img/hero-bg-1.png';

const nftFarmPageStyles = ((theme) => ({
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
    padding: '52px 0 64px',
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
    marginLeft: '49.5%',
    '& h3': {
      fontSize: '32px',
      lineHeight: '38px',
      marginBottom: '35px'
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
      }
    }
  },
  thVal: {
    width: '163px',
    height: '44px',
    backgroundColor: '#01DE8E',
    border: '1px solid #FFFFFF',
    borderRadius: '44px',
    marginBottom: '126px',
    '& p': {
      fontSize: '20px',
      lineHeight: '24px'
    },
    [theme.breakpoints.down("lg")]: {
      marginBottom: '80px'
    },
    [theme.breakpoints.down('sm')]: {
      height: '30px',
      width: '130px',
      marginBottom: '50px',
      '& p': {
        fontSize: "11px",
        lineHeight: '14px'
      }
    }
  },
  bannerBtns: {
    '& .MuiButtonBase-root': {
      fontSize: '15px',
      fontWeight: '600',
      lineHeight: '18px',
      border: '1px solid #FFFFFF',
      borderRadius: '5px',
      width: '173px',
      background: 'linear-gradient(266.77deg, #01DE8E -0.22%, #2B6AD8 99.97%)',
      marginTop: '8px'
    },
    '& .MuiButtonBase-root:first-child': {
      marginRight: '25px'
    },
    [theme.breakpoints.down('sm')]: {
      '& .MuiButtonBase-root': {
        fontSize: '12px',
        lineHeight: '15px',
        width: '130px'
      },
      '& .MuiButtonBase-root:first-child': {
        marginRight: '12px'
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
  header: {
    marginTop: '37px',
    marginBottom: '43px',
    [theme.breakpoints.down('sm')]: {
      margin: '32px 0'
    }
  },
  searchField: {
    width: '260px',
    marginRight: '13px',
    '& .MuiInputBase-root': {
      backgroundColor: theme.palette.mode === 'dark' ? '#1A1C1E' : '#fff'
    },
    [theme.breakpoints.down('lg')]: {
      width: '200px'
    },
    [theme.breakpoints.down('sm')]: {
      width: '50%'
    }
  },
  selectBox: {
    width: '173px',
    '& .MuiInputBase-root': {
      height: '44px',
      fontSize: '14px',
      lineHeight: '17px',
      fontWeight: '600'
    },
    [theme.breakpoints.down('lg')]: {
      width: '120px'
    },
    [theme.breakpoints.down('sm')]: {
      width: '40%'
    }
  },
  tabs: {
   '& .MuiButtonBase-root:nth-child(2)': {
    marginLeft: '11px',
    marginRight: '11px'
   },
   [theme.breakpoints.down('lg')]: {
    margin: '8px 0'
   },
   [theme.breakpoints.down("sm")]: {
    '& .MuiButtonBase-root': {
      fontSize: '11px',
      marginTop: '4px'
     },
   }
  },
  inactive: {
    '& .MuiTouchRipple-root': {
      backgroundColor: theme.palette.mode === 'dark' ? '#1A1C1E' : '#fff'
    }
  }
}));

export default nftFarmPageStyles;
