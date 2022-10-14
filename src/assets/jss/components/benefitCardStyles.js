const benefitCardStyles = ((theme) => ({
  benefitCard: {
    padding: '20px 26px 30px',
    backgroundColor: theme.palette.mode === 'dark' ? '#000' : '#fff',
    borderRadius: '8px',
    '& h6': {
      fontSize: '16px',
      lineHeight: '20px',
      marginBottom: '10px',
      color: theme.palette.mode === 'dark' ? '#fff' : '#000',
    },
    '& p': {
      fontSize: '12px',
      lineHeight: '15px',
      color: theme.palette.mode === 'dark' ? '#fff' : '#000',
      width: '76.5%'
    },
    [theme.breakpoints.down("lg")]: {
      '& p': {
        width: '100%'
      }
    },
    [theme.breakpoints.down('sm')]: {
      padding: '16px 20px 24px'
    }
  }
}));

export default benefitCardStyles;
