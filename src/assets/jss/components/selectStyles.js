const selectStyles = ((theme) => ({
  select: {
    '& .MuiInputBase-root': {
      zIndex: '2',
      position: 'relative',
      backgroundColor: theme.palette.mode === 'dark' ? '#1A1C1E' : '#fff',
      borderRadius: '8px',
      fontSize: '13.3px',
      lineHeight: '17px'
    },
    '& .MuiSelect-select': {
      padding: '9.5px 23.4px 7px'
    },
    '& .MuiOutlinedInput-notchedOutline': {
      display: 'none'
    },
    [theme.breakpoints.down("sm")]: {
      '& .gradient-bg': {
        width: 'calc(100% + 2px)',
        height: 'calc(100% + 2px)',
        top: '-1px',
        left: '-1px'
      },
      '& .MuiInputBase-root': {      
        fontSize: '11px',
        lineHeight: '14px',       
      },
      '& .MuiSelect-select': {
        padding: '6px 11px 5px'
      },
    }
  },
  greenBg: {
    '& .MuiInputBase-root': {
      backgroundColor: '#01DE8E',
      color: theme.palette.mode === 'dark' ? '#000' : '#fff'
    },
    '& .MuiSvgIcon-root': {
      color: theme.palette.mode === 'dark' ? '#000' : '#fff'
    },
    '& .gradient-bg': {
      display: 'none'
    }
  }
}));

export default selectStyles;
