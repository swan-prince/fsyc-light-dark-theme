import heroImg from 'assets/img/hero-bg-1.png';
import graphBg from 'assets/img/graph-bg.png';

const marketplacePageStyles = ((theme) => ({
  bannerSection: {
    background: 'linear-gradient(63.84deg, #01DE8E 0.8%, #000000 129.14%)',
    borderRadius: "8px",
    boxSizing: 'border-box',
  },
  bannerInner: {
    minHeight: '233px',
    backgroundImage: `url(${heroImg})`,
    backgroundSize: '100% 100%',
    backgroundRepeat: 'no-repeat',
    borderRadius: '8px',
    padding: '48px 0',
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
    marginLeft: '35.32%',
    width: 'fit-content',
    color: '#fff',
    '& h3': {
      fontSize: '32px',
      lineHeight: '38px',
      paddingBottom: '9px',
      borderBottom: '1px solid #fff',
      marginBottom: '30px'
    },
    '& p': {
      fontSize: '13px',
      lineHeight: '16px',
      marginBottom: '12px',
      textAlign: 'center'
    },
    '& h6': {
      fontSize: '25px',
      lineHeight: '30px',
      textAlign: 'center'
    },
    [theme.breakpoints.down('lg')]: {
      marginLeft: '30%',
      '& h3': {
        fontSize: '24px',
        lineHeight: '28px',
        marginBottom: '20px'
      },
      '& p': {
        marginBottom: '8px',
      },
      '& h6': {
        fontSize: '20px',
        lineHeight: '24px',
      },
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
      '& p': {
        fontSize: '11px',
        lineHeight: '14px',
      },
      '& h6': {
        fontSize: '14px',
        lineHeight: '18px',
      },
    }
  },
  heroImg: {
    maxWidth: '344px',
    left: '28px',
    bottom: '0',
    width: '31.56%',
    [theme.breakpoints.down('md')]: {
      position: 'unset !important',
      marginLeft: 'auto',
      marginRight: 'auto',
      maxWidth: '400px',
      width: '90%'
    },
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      maxWidth: '250px'
    }
  },
  headerDataCell: {
    width: '25%'
  },
  filterHeader: {
    marginTop: '33px',
    marginBottom: '39px',
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
  },
  titleHeader: {
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
  activityTable: {
    padding: '35px 42px',
    backgroundColor: theme.palette.mode === 'dark' ? '#000' : '#fff',
    backgroundImage: `url(${graphBg})`,
    backgroundWidth: '100% 100%',
    backgroundRepeat: 'no-repeat',
    borderRadius: '8px',
    '& .MuiTableHead-root': {
      '& .MuiTableCell-root': {
        fontSize: '16px',
        lineHeight: '20px',
        color: '#01DE8E',
        fontFamily: 'Inter',
        padding: '0 16px 19px',
        borderBottom: '0'
      },
      '& .MuiTableRow-root': {
        position: 'relative',
        '&::after': {
          width: '100%',
          content: `''`,
          position: 'absolute',
          height: '2px',
          background: 'linear-gradient(right, #01DE8E, #2B6AD8)',
          bottom: '0',
          left: '0'
        }
      }
    },
    '& .MuiTableBody-root': {
      '& .MuiTableCell-root': {
        padding: '15px 16px 22px',
        fontSize: '16px',
        lineHeight: '20px',
        color: theme.palette.mode === 'dark' ? '#fff' : '#000',
        fontFamily: 'Inter',
        fontWeight: '300',
        borderBottom: '0'
      },
      '& a': {
        fontSize: '16px',
        lineHeight: '20px',
        color: theme.palette.mode === 'dark' ? '#fff' : '#000',
        fontFamily: 'Inter',
        fontWeight: '300',
        textDecorationColor: theme.palette.mode === 'dark' ? '#fff' : '#000',
      },
      '& .MuiTableRow-root': {
        position: 'relative',
        '&::after': {
          width: '100%',
          content: `''`,
          position: 'absolute',
          height: '2px',
          background: 'linear-gradient(right, #01DE8E, #2B6AD8)',
          bottom: '0',
          left: '0'
        }
      },
      '& .MuiTableRow-root:last-child': {
        '&::after': {
          display: 'none'
        }
      }
    },
    '& .MuiTableContainer-root::-webkit-scrollbar': {
      height: '8px'      
    },
    '& .MuiTableContainer-root::-webkit-scrollbar-thumb': {
      background: 'linear-gradient(right, #01DE8E, #2B6AD8)'
    },
    [theme.breakpoints.down('sm')]: {
      padding: '20px 16px',
      '& .MuiTableHead-root': {
        '& .MuiTableCell-root': {
          fontSize: '12px !important',
          lineHeight: '14px !important',
          padding: '0 8px 12px !important',
        },
        '& .MuiTableRow-root': {
          '&::after': {
            height: '1px !important',           
          }
        }
      },
      '& .MuiTableBody-root': {
        '& .MuiTableCell-root': {
          padding: '12px 8px 12px !important',
          fontSize: '12px !important',
          lineHeight: '14px !important',
        },
        '& a': {
          fontSize: '12px !important',
          lineHeight: '14px !important',
        },
        '& .MuiTableRow-root': {
          '&::after': {
            height: '1px !important',
          }
        }        
      },
    }
  }
}));

export default marketplacePageStyles;
