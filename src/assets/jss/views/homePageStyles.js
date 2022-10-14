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
    [theme.breakpoints.down('md')]: {
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
  }
}));

export default homePageStyles;
