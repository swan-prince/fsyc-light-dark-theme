import heroImg from 'assets/img/hero-bg-1.png';

const inventoryPageStyles = ((theme) => ({
  bannerSection: {
    background: 'linear-gradient(63.84deg, #01DE8E 0.8%, #2B6AD8 129.14%)',
    borderRadius: "8px",    
    boxSizing: 'border-box',   
  },
  bannerInner: {  
    minHeight: '276px',
    backgroundImage: `url(${heroImg})`,
    backgroundSize: '100% 100%',
    backgroundRepeat: 'no-repeat',
    borderRadius: '8px',
    padding: '51px 0',
    boxSizing: 'border-box',
    [theme.breakpoints.down('lg')]: {
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      minHeight: '200px',
      padding: '30px 0'
    },
    [theme.breakpoints.down('sm')]: {
      padding: '20px 0',
      minHeight: '150px'
    }
  },
  logoBox: {
    display: 'flex',
    width: '282px',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',
    zIndex: '2',
    '& .MuiButtonBase-root': {
      marginTop: '44px',
      width: '176px',
      fontSize: '13px',
      fontWeight: '500',
      color: '#2B6AD8',
      fontFamily: 'Inter'
    },
    [theme.breakpoints.down('lg')]: {
      width: '200px',
      '& .MuiButtonBase-root': {
        marginTop: '25px'
      }
    },
    [theme.breakpoints.down('sm')]: {
      width: '150px',
      '& .MuiButtonBase-root': {
        width: '100%',
        marginTop: '16px',
        fontSize: '11px'
      }
    }
  },
  hero1: {
    position: 'absolute',
    bottom: '0',
    left: '22px',
    [theme.breakpoints.down('lg')]: {
      width: '250px'
    },
    [theme.breakpoints.down('sm')]: {
      width: '150px',
      left: '0'
    }
  },
  hero2: {
    position: 'absolute',
    bottom: '0',
    right: '27px',
    [theme.breakpoints.down('lg')]: {
      width: '260px'
    },
    [theme.breakpoints.down('sm')]: {
      width: '160px',
      right: '0'
    }
  },
  searchField: {
    width: '36.7%',
    maxWidth: '400px',
    minWidth: '150px',
    '& .MuiInputBase-root': {
      backgroundColor: theme.palette.mode === 'dark' ? '#1A1C1E' : '#fff'
    }
  },
  header: {
    margin: '33px 0',
    [theme.breakpoints.down('sm')]: {
      margin: '16px 0'
    }
  }
}));

export default inventoryPageStyles;
