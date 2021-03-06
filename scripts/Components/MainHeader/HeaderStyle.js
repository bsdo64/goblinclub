/**
 * Created by dobyeongsu on 2015. 11. 13..
 */
function Header() {}
Header.prototype = {
  INLINE_STYLE: {
    '#header': {
      '.container': {
        width: '100%'
      }
    },
    body: {
      '#app': {
        height: 'calc(100vh - 50px)'
      }
    },
    '.nano': {
      '.nano-pane': {
        background: 'rgba(0,0,0,.15)'
      }
    },
    '.loginModal': {
      '.modal-content': {
        backgroundColor: '#f1f1f1'
      },
      '.modal-content li > a': {
        padding: 5
      },
      '.modal-content li.active > a': {
        backgroundColor: '#227973',
        color: '#fff'
      }
    }
  },
  header: {
    height: 50,
    backgroundColor: '#01403c',
    minWidth: 1024,
    border: 'none'
  },
  logo: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
    letterSpacing: 1,
    width: 240,
    lineHeight: '30px',
    padding: 13
  },
  search: {
    layout: {
      overflow: 'hidden',
      position: 'relative',
      maxWidth: 800
    },
    container: {
      padding: '12px 0',
      height: 50
    },
    bar: {
      margin: 'auto',
      position: 'relative',
      height: 26,
      borderRadius: 2
    }
  },

  menu: {
    layout: {
      float: 'right',
      width: 500
    },
    container: {
      height: 50,
      padding: 12
    },
    item: {
      borderRadius: 1,
      boxShadow: '1px 1px 0 #000000',
      color: '#fff',
      backgroundColor: '#01403c',
      padding: '3px 10px',
      borderTop: 'solid #3b6b68 1px',
      borderLeft: 'solid #3b6b68 1px',
      borderBottom: 'none',
      borderRight: 'none',
      height: 25,
      fontSize: 13,
      ':hover': {
        backgroundColor: '#2b5f5b',
        backgroundImage: 'linear-gradient(to bottom, #2b5f5b, #01403c)',
        textDecoration: 'none'
      }
    },
    leftItem: {
      borderRadius: 1,
      boxShadow: '1px 1px 0 #000000',
      color: '#fff',
      backgroundColor: '#01403c',
      padding: '3px 7px',
      borderTop: 'solid #3b6b68 1px',
      borderLeft: 'solid #000000 1px',
      borderBottom: 'none',
      borderRight: 'none',
      height: 25,
      fontSize: 13
    },
    marginLeft: {
      marginLeft: 5
    }
  }
};
export default new Header();
