/**
 * Created by dobyeongsu on 2015. 11. 13..
 */
import common from '../../Lib/Style/common';

function PostOfBestStyle() {}
PostOfBestStyle.prototype = {
  container: common.CONTAINER.UL_CONTAINER,
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
    fontWeight: 600
  },
  postTitleClub: {
    color: '#00A99E',
    fontSize: 11
  },
  postContentMeta: {
    margin: '0',
    fontSize: 10
  },
  defaultClubMeta: {
    margin: '5px 0',
    fontSize: 10
  },
  postContents: {
    margin: '20px 0'
  },
  countInfo: {
    fontSize: 11,
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
    color: '#aaa',
    fontSize: 13
  },
  postButtons: {
    margin: '5px 5px 5px 0px',
    fontSize: 15
  },
  fontSize13: {
    fontSize: 13
  },
  thumbUp: {
    color: '#aaa',
    padding: '2px 12px',
    ':hover': {
      color: 'red'
    }
  },
  thumbDown: {
    color: '#aaa',
    padding: '2px 12px',
    ':hover': {
      color: 'red'
    }
  },
  commentButton: {
    color: '#aaa',
    padding: '2px 12px',
    ':hover': {
      color: 'red'
    }
  },
  textCenter: {
    textAlign: 'center'
  },
  buttonHrBottom: {
    marginBottom: 0
  },
  red: {
    color: 'red'
  }
};
export default new PostOfBestStyle();
