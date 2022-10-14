const textFieldStyles = ((theme) => ({
  textField: {
    '& .MuiInputBase-root': {
      backgroundColor: theme.palette.mode === 'dark' ? '#000' : '#fff',
      height: '44px',
      fontSize: '13.3px',
      fontWeight: '500',
      color: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.75)' : '#2B6AD8',
      borderRadius: '8px',
      paddingRight: '24px',
      position: 'relative',
      '& .MuiInputBase-input': {
        paddingLeft: '23.3px'
      },
      '& .MuiOutlinedInput-notchedOutline': {
        display: 'none'
      },
      '& input::placeholder': {
        opacity: '1'
      }
    },
    '&::before': {
      width: 'calc(100% + 2px)',
      height: 'calc(100% + 2px)',
      position: 'absolute',
      content: `''`,
      top: '-1px',
      left: '-1px',
      background: 'linear-gradient(to right, #8B41AB, #01DE8E)',
      borderRadius: '8px'      
    }
  }
}));

export default textFieldStyles;
