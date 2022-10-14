const projectNewsCardStyles = ((theme) => ({
  projectNews: {
    padding: '18px 17px 12px',
    backgroundColor: theme.palette.mode === 'dark' ? '#000' : '#fff',
    borderRadius: '8px',
    '& h3': {
      color: theme.palette.mode === 'dark' ? '#fff' : '#2B6AD8',
      fontSize: '18px',
      lineHeight: '22px'
    },
    '& p': {
      color: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.8)' : '#000',
      marginTop: '10px',
      paddingRight: '5px',
      paddingLeft: '5px',
      fontSize: '12px',
      lineHeight: '14px'
    },
    [theme.breakpoints.down("sm")]: {
      '& h3': {
        fontSize: '15px',
        lineHeight: '1.2'
      },
      '& p': {
        fontSize: '11px'
      }
    }
  },
  newsTitle: {
    padding: '17px 16px 16px',
    backgroundColor: theme.palette.mode === 'dark' ? '#000' : '#fff',
    borderRadius: '8px',
  }
}));

export default projectNewsCardStyles;
