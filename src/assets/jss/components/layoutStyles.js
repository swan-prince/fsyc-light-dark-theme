const layoutStyles = ((theme) => ({
  sidebar: {
    width: '256px',
    zIndex: '1',
    [theme.breakpoints.down('md')]: {
      display: 'none'
    }
  },
  contents: {
    width: 'calc(100% - 256px)',   
    [theme.breakpoints.down('md')]: {
      width: '100%'
    }
  },
  contentsInner: {
    flex: 'auto'
  }
}));

export default layoutStyles;
