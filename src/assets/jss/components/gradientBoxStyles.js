const gradientBoxStyles = (() => ({
  wrapper: {
    borderRadius: '8px'
  },
  background: {    
    background: 'linear-gradient(to right, #2B6AD8, #01DE8E)',
    borderRadius: '8px'
  },
  contents: {
    zIndex: '2'
  },
  largeBorderWidth: {
    width: 'calc(100% + 4px)',
    height: 'calc(100% + 4px)',
    top: '-2px',
    left: '-2px'
  },
  smallBorderWidth: {
    width: 'calc(100% + 2px)',
    height: 'calc(100% + 2px)',
    top: '-1px',
    left: '-1px'
  }
}));

export default gradientBoxStyles;
