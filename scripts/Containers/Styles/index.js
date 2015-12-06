/**
 * Created by dobyeongsu on 2015. 12. 6..
 */
const Styles = {};

export const Sidebar = {
  base: {
    position: 'absolute',
    right: 0,
    top: 50,
    bottom: 0,
    backgroundColor: '#e7efef',
    width: 340,
    minHeight: 600,
    borderTop: '1px solid #111',
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
      color: '#00B1A3',
      fontSize: 13,
      fontWeight: 'bold',
      paddingTop: 26
    },
    element: {
      listStyle: 'none',
      margin: 0,
      padding: '0 0 15px 0'
    },
    title: {
      listStyle: 'none',
      fontSize: 13,
      paddingLeft: 17
    },
    list: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      color: '#2b5f5b'
    },
    listElement: {
      listStyle: 'none',
      paddingLeft: 32,
      color: '#001f35',
      ':hover': {
        backgroundColor: '#2b5f5b',
        color: '#fff'
      }
    },
    listActive: {
      backgroundColor: '#2b5f5b',
      color: '#fff'
    }
  }
};

export default Styles;
