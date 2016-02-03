/**
 * Created by dobyeongsu on 2015. 11. 13..
 */
function Main() {}
Main.prototype = {
  main: {
    position: 'relative',
    overflow: 'hidden',
    marginTop: '50px',
    marginLeft: '240px',
    marginRight: '340px',
    boxSizing: 'border-box',
    backgroundColor: '#aaa',
    height: '100%',
    minHeight: 600,
    minWidth: 565,
    borderLeft: '1px solid #111',
    borderRight: '1px solid #111',
    borderBottom: 'none'
  },
  mainBox: {
    background: '#f4f4f4',
    height: '100%',
    overflow: 'hidden'
  },
  contents: {
    height: 'calc(100vh - 76px)'
  },
  scrollContent: {
    right: 0,
    width: 'auto',
    height: 'auto',
    overflow: 'hidden',
    overflowY: 'scroll',
    bottom: 0,
    left: 0,
    top: 0
  }
};

export default new Main();