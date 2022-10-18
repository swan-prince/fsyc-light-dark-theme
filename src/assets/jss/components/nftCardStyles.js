const nftCardStyles = ((theme) => ({
  contents: {
    backgroundColor: theme.palette.mode === 'dark' ? '#000' : '#fff',
    color: theme.palette.mode === 'dark' ? '#fff' : '#000',
    borderRadius: '8px'
  },
  details: {
    padding: '16px 22px 16px',
    '& h5': {
      fontSize: '16px',
      lineHeight: '20px',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
      overflow: 'hidden',
      color: theme.palette.mode === 'dark' ? '#fff' : '#2B6AD8',
    },
    '& h6': {
      fontSize: '12px',
      lineHeight: '15px',
      marginBottom: '15px',
      color: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.8)' : '#2B6AD8',
    },
    '& p': {
      fontSize: '14px',
      lineHeight: '18px',
      marginBottom: '20px',
      color: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.4)' : '#8B41AB',
    },
    '& .MuiButtonBase-root': {
      fontSize: '15px',
      lineHeight: '18.7px'
    },
    [theme.breakpoints.down('sm')]: {
      padding: '18px 19px 14px',
      '& h5': {
        fontSize: '13px',
        lineHeight: '16px'
      },
      '& h6': {
        fontSize: '11px',
        lineHeight: '14px',
        marginBottom: '5px'
      },
      '& p': {
        fontSize: '12px',
        lineHeight: '15px',
        marginBottom: '16px'
      },
      '& .MuiButtonBase-root': {
        fontSize: '13px',
        lineHeight: '17px'
      },
    }
  },
  title: {
    [theme.breakpoints.down('sm')]: {
      '& img': {
        width: '11px'
      }
    }
  },
  imgBox: {
    '& .MuiBox-root': {
      display: 'flex',
      '& img': {
        borderRadius: '8px'
      }
    }    
  }
}));

export default nftCardStyles;
