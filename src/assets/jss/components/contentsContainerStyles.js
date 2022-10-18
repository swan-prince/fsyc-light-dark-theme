import bgImg from 'assets/img/background.png';

const contentsContainerStyles = ((theme) => ({
  wrapper: {
    backgroundImage: `url(${bgImg})`,
    backgroundSize: '100% 100%',
    backgroundRepeat: 'no-repeat',
    backgroundColor: theme.palette.mode === 'dark' ? '#1A1C1E' : '#fff',
    padding: '40px 31px 60px 34px',
    boxSizing: 'border-box',
    height: '100%',
    [theme.breakpoints.down('md')]: {
      padding: '30px'
    }
  },
  pageTitle: {
    '&.MuiTypography-root': {
      fontSize: '24px',
      lineHeight: '37.8px',
      marginBottom: '20px',
      color: theme.palette.mode === 'dark' ? '#fff' : '#8B41AB',
      position: 'relative',
      zIndex: '2'
    },
    [theme.breakpoints.down('md')]: {
      display: 'none'
    }
  }
}));

export default contentsContainerStyles;
