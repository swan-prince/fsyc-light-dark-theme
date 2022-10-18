const buttonStyles = ((theme) => ({
  btn: {
    '&.MuiButtonBase-root': {
      textTransform: 'none',
      fontSize: '13px',
      fontWeight: '500',
      height: '40px',      
      borderRadius: '3px',
      boxShadow: 'none !important'
    },
    '& .MuiButton-startIcon': {
      marginRight: '19px'
    }
  },
  gradientFill: {
    '&.MuiButtonBase-root': {
      background: 'linear-gradient(92.13deg, #01DE8E -23.46%, #2B6AD8 110.81%)',
      color: '#fff'
    }
  },
  gradientOutline: {
    '&.MuiButtonBase-root': {
      position: 'relative',      
      boxShadow: 'none !important',
      color: theme.palette.mode === 'dark' ? '#fff' : '#000',
      '&::before': {
        position: 'absolute',
        width: 'calc(100% + 2px)',
        height: 'calc(100% + 2px)',
        content: `''`,
        left: '-1px',
        top: '-1px',
        background: 'linear-gradient(to right, #8B41AB, #01DE8E)',
        borderRadius: '3px'
      }
    },
    '& .MuiTouchRipple-root': {
      backgroundColor: theme.palette.mode === 'dark' ? '#000' : '#fff',
    },
    '& .btn-text': {
      position: 'relative',
      zIndex: '2'
    },
    '& .MuiButton-startIcon': {
      position: 'relative',
      zIndex: '2'
    }
  },
  whiteFill: {
    '&.MuiButtonBase-root': {
      backgroundColor: '#fff !important',
      color: '#000'
    }
  },
  greenFill: {
    '&.MuiButtonBase-root': {
      backgroundColor: '#01DE8E !important',
      color: '#000'
    }
  }  
}));

export default buttonStyles;
