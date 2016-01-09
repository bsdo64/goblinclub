/**
 * Created by dobyeongsu on 2015. 11. 13..
 */
export default {
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
