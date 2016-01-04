/**
 * Created by dobyeongsu on 2015. 11. 13..
 */
export default {
  posts: {
    container: {
      listStyle: 'none',
      margin: 0,
      padding: '15px 15px 0 15px',
      maxWidth: 1024,
      width: '100%',
      minWidth: 560,
      display: 'inline-block'
    },
    post: {
      listStyle: 'none',
      marginBottom: 10
    },
    listObj: {
      backgroundColor: '#fff',
      borderRadius: 1,
      boxShadow: '1px 1px #b0c2c0',
      padding: 15
    },
    postTitle: {
      margin: 0,
      padding: '0 0 5px 0',
      borderBottom: '1px solid #b0c2c0'
    },
    postTitleItem: {
      color: '#000',
      fontSize: '18px',
      fontWeight: 'bold'
    },
    postTitleClub: {
      color: '#00A99E',
      fontSize: 11,
      fontWeight: 'bold'
    },
    postContentMeta: {
      margin: '9px 0',
      fontSize: 10
    },
    postContents: {
      margin: '5px 0'
    },
    countInfo: {
      fontSize: 13,
      color: '#2b5f5b'
    },
    paddingLeft10: {
      paddingLeft: 10
    },
    voteCount: {
      color: '#2D00AD',
      fontWeight: 'bold'
    },
    commentCount: {
      color: '#00716E',
      fontWeight: 'bold'
    },
    deleteButton: {
      float: 'right',
      color: '#aaa'
    },
    postButtons: {
      margin: '5px 5px 5px 0px',
      fontSize: 15
    },
    thumbUp: {
      color: '#aaa',
      padding: '2px 18px',
      border: '1px solid rgb(221, 221, 221)',
      ':hover': {
        color: 'red'
      }
    },
    thumbDown: {
      color: '#aaa',
      padding: '2px 18px',
      border: '1px solid rgb(221, 221, 221)',
      margin: '0px -1px',
      ':hover': {
        color: 'red'
      }
    },
    commentButton: {
      color: '#aaa',
      padding: '2px 18px',
      border: '1px solid rgb(221, 221, 221)',
      ':hover': {
        color: 'red'
      }
    },
    textCenter: {
      textAlign: 'center'
    }
  }
};
