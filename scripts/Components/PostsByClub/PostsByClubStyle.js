/**
 * Created by dobyeongsu on 2015. 11. 13..
 */
import common from '../../Lib/Style/common';

function PostsByClubStyle() {}
PostsByClubStyle.prototype = {
  container: common.CONTAINER.UL_CONTAINER,
  post: {
    listStyle: 'none',
    marginBottom: 1
  },
  listObj: {
    backgroundColor: '#fff',
    borderRadius: 1,
    boxShadow: '1px 1px #b0c2c0',
    padding: '4px 12px 5px 12px',
    borderLeft: '3px solid #2B5F5B',
    minHeight: 35
  },
  thumbNail: {
    position: 'absolute',
    textAlign: 'center',
    width: 30,
    height: 45,
    paddingTop: 3
  },
  thumbNailImg: {
    maxHeight: '100%',
    maxWidth: '100%'
  },
  textBody: {
    marginLeft: 45
  },
  postTitle: {
    margin: 0,
    padding: '3px 0 4px 0',
    borderBottom: '1px solid #DFE9E8'
  },
  postTitleContainer: {
    display: 'inline-block'
  },
  postTitleItem: {
    color: '#000',
    fontSize: '14px'
  },
  postTitleClub: {
    color: '#00A99E',
    fontSize: 11
  },
  postContentMeta: {
    float: 'right',
    fontSize: 10
  },
  postContents: {
    margin: '5px 0'
  },
  btnArea: {
    display: 'inline-block'
  },
  postButtons: {
    margin: '10px 0'
  },
  voteCount: {
    fontSize: 11,
    color: '#aaa',
    padding: '0 5px'
  },
  commentCount: {
    fontSize: 11,
    color: '#aaa'
  },
  deleteButton: {
    float: 'right',
    position: 'relative',
    display: 'inline-block'
  },
  deleteButtonText: {
    fontSize: 11,
    color: '#aaa'
  },
  thumbUp: {
    fontSize: 11,
    color: '#aaa',
    padding: '5px 10px',
    ':hover': {
      color: 'red'
    }
  },
  thumbDown: {
    fontSize: 12,
    color: '#aaa',
    padding: '5px 10px',
    ':hover': {
      color: 'red'
    }
  },
  commentButton: {
    fontSize: 12,
    color: '#aaa',
    padding: '5px 10px',
    ':hover': {
      color: 'red'
    }
  },
  pagerButton: {
    borderRadius: 2,
    ':hover': {
      backgroundColor: '#abc'
    }
  }
};

export default new PostsByClubStyle();
