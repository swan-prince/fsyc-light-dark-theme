const drawerStyles = ((theme) => ({
  menuDrawer: {
    '& .MuiPaper-root': {
      minHeight: '100vh',
      backgroundColor: theme.palette.mode === 'dark' ? '#000' : '#fff',
      backgroundImage: 'unset'
    }
  },
  hamburgerDrawer: {
    '& .MuiPaper-root': {
      minHeight: '100vh',
      backgroundColor: theme.palette.mode === 'dark' ? '#000' : '#fff',
      backgroundImage: 'unset',
      width: '100%'
    }
  },
  hamburgerContents: {
    padding: '33px 16px'
  },
  userBtn: {
    '&.MuiButtonBase-root': {
      width: '36px',
      height: '36px',
      padding: '0',
      borderRadius: '3px',
      background: 'linear-gradient(180deg, #2B6AD8 0%, #8B41AB 100%)',
      minWidth: 'unset',
      boxShadow: '0px 4px 10px rgba(1, 222, 142, 0.25)',
      border: '0.5px solid #01DE8E'
    }    
  },
  badge: {
    cursor: 'pointer'
  },
}));

export default drawerStyles;
