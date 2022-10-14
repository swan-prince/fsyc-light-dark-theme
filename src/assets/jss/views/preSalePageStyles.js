import bannerBgImg from 'assets/img/pre-sale-banner-bg.png';

const preSalePageStyles = ((theme) => ({
  bannerSection: {   
    borderRadius: '8px',    
    background: 'linear-gradient(63.84deg, #2B6AD8 0.8%, #000000 129.14%)',
  },
  bannerSectionInner: {
    backgroundImage: `url(${bannerBgImg})`,
    backgroundSize: '100% 100%',
    backgroundRepeat: 'no-repeat',
    padding: '24px 40px',
    minHeight: '275px',
    boxSizing: 'border-box',
    '& h3': {
      fontSize: '32px',
      lineHeight: '38px',
      color: '#fff',
      marginBottom: '14px'
    },
    '& p': {
      fontSize: '13px',
      lineHeight: '16px',
      color: '#fff',
      marginBottom: '16px'
    },
    '& .MuiButtonBase-root': {
      width: '160px',
      fontSize: '16px',
      lineHeight: '20px',
      paddingLeft: '0',
      paddingRight: '0',
      fontWeight: '600',
      borderRadius: '8px',
      height: '50px'
    },
    [theme.breakpoints.down('md')]: {
      flexWrap: 'wrap',
      paddingBottom: '0',
      backgroundSize: 'cover',
      backgroundPosition: 'center center'
    },
    [theme.breakpoints.down('sm')]: {    
      padding: '24px 26px 0',
      '& h3': {
        fontSize: '20px',
        lineHeight: '24px',
        marginBottom: '12px'
      },
      '& p': {
        fontSize: '11px',
        lineHeight: '13.7px'
      },
      '& .MuiButtonBase-root': {
        width: '130px',
        fontSize: '12px',
        lineHeight: '15px',
        height: '34px'
      },
    }
  },
  bannerTextCell: {
    width: '68.6%',
    zIndex: '2',
    [theme.breakpoints.down('md')]: {
      width: '100%'
    }
  },
  heroImg: {   
    right: '-28px',
    bottom: '0',
    width: '466px',
    [theme.breakpoints.down('md')]: {
      position: 'unset !important',
      marginLeft: 'auto',
      marginRight: 'auto'
    }
  },
  benefitsSection: {
    marginTop: '20px',
    '& h4': {
      fontSize: '22px',
      lineHeight: '27px',
      marginBottom: '20px',
      color: theme.palette.mode === 'dark' ? '#fff' : '#2B6AD8',
    }
  },
  benefitsList: {
    backgroundColor: theme.palette.mode === 'dark' ? '#000' : '#fff',
    padding: '25px 24px',
    borderRadius: '8px',
    boxShadow: theme.palette.mode === 'dark' ? '6.96317px 10.4447px 43.5198px rgba(0, 0, 0, 0.4)' : 'none',
    [theme.breakpoints.down('sm')]: {
      padding: '16px'
    }
  }
}));

export default preSalePageStyles;
