const paginationStyles = ((theme) => ({
  pagination: {
    '& .MuiButtonBase-root': {
      minWidth: 'unset',
      width: '36px',
      height: '36px',
      borderRadius: '12px',
      backgroundColor: '#01DE8E !important',
      '& .MuiSvgIcon-root': {
        color: '#fff',
      }
    },
    '& .MuiButtonBase-root.Mui-disabled': {
      border: '1px solid #01DE8E',
      backgroundColor: 'transparent !important',
      '& .MuiSvgIcon-root': {
        color: '#01DE8E',
      }
    },
    '& .MuiButtonBase-root:first-child': {
      marginRight :'12px'
    },
    [theme.breakpoints.down('sm')]: {
      '& .MuiButtonBase-root': {       
        width: '29px',
        height: '25px',
        borderRadius: '3px'
      },
      '& .MuiButtonBase-root:first-child': {
        marginRight :'2px'
      },
    }
  }
}));

export default paginationStyles;
