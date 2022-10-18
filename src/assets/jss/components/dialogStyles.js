const dialogStyles = ((theme) => ({
  dialog: {
    '& .MuiDialog-paper': {
      background: theme.palette.mode === 'dark' ? '#000' : '#fff',
      boxShadow: '0px 4px 60px rgba(1, 222, 142, 0.3)',
      border: '1px solid #01DE8E',
      borderRadius: '8px',
      margin: '16px',
      width: 'calc(100% - 32px)',
      maxWidth: '462px'
    }
  },
  dialogContents: {
    padding: '33px 38px 54px',
    '& > p': {
      fontSize: '13px',
      lineHeight: '16px',
      color: theme.palette.mode === 'dark' ? '#fff' : '#000',
      marginBottom: '30px'
    },
    [theme.breakpoints.down("sm")]: {
      padding: '30px 24px 34px'
    }
  },
  header: {
    marginBottom: '22px',
    '& h6': {
      fontSize: '24px',
      lineHeight: '29px',
      color: '#01DE8E'
    }
  },
  closeBtn: {
    '&.MuiButtonBase-root': {
      position: 'absolute',
      right: '-8px',
      top: '50%',
      transform: 'translateY(-50%)'
    }
  },
  walletBtn: {
    '&.MuiButtonBase-root': {
      textTransform: 'none',
      fontSize: '24px',
      lineHeight: '30px',
      fontWeight: '600',
      color: theme.palette.mode === 'dark' ? '#fff' : '#000',
      justifyContent: 'space-between',
      padding: '12px 20px 12px 30px',
      '& .MuiBox-root': {
        width: '38px',
        height: '38px',
        backgroundColor: theme.palette.mode === 'dark' ? '#fff' : '#000',
        borderRadius: '50%',
        boxShadow: '0px 4px 8px rgba(1, 222, 142, 0.3)'
      }
    }
  },  
  mintHeader: {
    marginBottom: '40px'
  },
  mintForm: {
    padding: '20px 15px',
    '& .MuiInputBase-root': {
      width: '150px',
      height: '44px'
    },
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: '#01DE8E !important'
    },
    '& .MuiSvgIcon-root': {
      color: '#01DE8E'
    },
    '& .MuiIconButton-root': {
      padding: '0'
    },
    '& .MuiTypography-root': {
      fontSize: '14px'
    }
  },
  minersField: {
    '& .MuiInputBase-input': {
      textAlign: 'center'
    }
  },
  mintTotalField: {
    '& .MuiBox-root': {
      width: '24px',
      height: '24px',
      borderRadius: '50%',
      backgroundColor: theme.palette.mode === 'dark' ? '#fff' : '#000',
    }
  },
  divider: {
    width: '100%',
    height: '1px',
    backgroundColor: '#01DE8E',
    boxShadow: '5px 0px 6px #01DE8E'
  },
  mintBtn: {
    '& .MuiButtonBase-root': {
      fontSize: '16px',
      fontWeight: '600',
      borderRadius: '8px'
    }
  },
  whiteDivider: {
    '&.MuiDivider-root': {
      borderColor: theme.palette.mode === 'dark' ? '#fff' : '#000'
    }
  }
}));

export default dialogStyles;
