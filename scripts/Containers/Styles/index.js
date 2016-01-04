/**
 * Created by dobyeongsu on 2015. 12. 6..
 */
const Styles = {};

export const Main = {
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
    height: 'calc(100vh - 78px)'
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

export const Sidebar = {
  base: {
    position: 'absolute',
    right: 0,
    top: 50,
    bottom: 0,
    backgroundColor: '#F4F4F4',
    width: 340,
    minHeight: 600,
    '@media (max-width: 1145px)': {
      width: 'calc(100% - 805px)'
    }
  },
  searchClub: {
    base: {
      marginTop: 20
    },
    container: {
      width: '90%',
      margin: 'auto'
    }
  },
  clubs: {
    container: {
      fontSize: 14
    },
    element: {
      listStyle: 'none',
      margin: 0,
      padding: '0 0 2px 0'
    },
    title: {
      fontSize: 13,
      paddingLeft: 17,
      color: '#fff',
      backgroundColor: '#2B5F5B',
      height: '26px',
      lineHeight: '26px'
    },
    list: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      color: '#2b5f5b'
    },
    listElement: {
      paddingLeft: 25,
      color: '#2B5F5B',
      margin: '2px 0 2px 0',
      height: '22px',
      lineHeight: '22px',
      fontWeight: 'bold',
      fontSize: 12,
      backgroundColor: '#fff',
      ':hover': {
        backgroundColor: '#f4f4f4'
      }
    },
    listActive: {
      backgroundColor: '#2B5F5B'
    }
  }
};

export const Header = {
  header: {
    height: 50,
    backgroundColor: '#01403c',
    minWidth: 1024,
    border: 'none'
  },
  logo: {
    color: '#fff',
    fontSize: '30px',
    fontWeight: 'bold',
    letterSpacing: 1
  },
  search: {
    layout: {
      marginLeft: 0,
      marginRight: 0,
      float: 'left'
    },
    container: {
      marginLeft: 35,
      padding: '12px 0',
      height: 50
    },
    bar: {
      margin: 'auto',
      position: 'relative',
      height: 26,
      width: 565,
      borderRadius: 2
    }
  },

  menu: {
    layout: {
      float: 'right'
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
    marginLeft: {
      marginLeft: 5
    }
  }
};


export default Styles;
