/**
 * Created by dobyeongsu on 2015. 11. 13..
 */
function Editor() {}
Editor.prototype = {
  widget: {
    container: {
      listStyle: 'none',
      margin: 0,
      padding: 15,
      maxWidth: 1024,
      width: '100%',
      minWidth: 560,
      display: 'inline-block'
    },
    listObj: {
      backgroundColor: '#fff',
      borderRadius: 1,
      boxShadow: '1px 1px #b0c2c0',
      padding: 15
    },
    listObj1: {
      backgroundColor: '#fff',
      borderRadius: 1,
      boxShadow: '1px 1px #b0c2c0',
      padding: 15,
      marginBottom: 15
    },
    textarea1: {
      width: '100%',
      height: 20,
      border: 'none',
      fontSize: 15
    }
  },
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
    borderTop: '1px solid #111',
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
export default new Editor();
