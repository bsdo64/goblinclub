/**
 * Created by dobyeongsu on 2015. 11. 13..
 */
import common from './common';

export default {
  container: {
    fontSize: 14
  },
  element: {
    listStyle: 'none',
    margin: 0,
    padding: '0 0 2px 0'
  },
  title: {
    fontSize: 14,
    paddingLeft: 17,
    color: '#fff',
    backgroundColor: common.MAIN_COLOR,
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
    color: common.MAIN_COLOR,
    margin: '2px 0 2px 0',
    height: '22px',
    lineHeight: '22px',
    fontWeight: 500,
    fontSize: 12,
    backgroundColor: '#fff',
    ':hover': {
      backgroundColor: common.BACKGROUND_GRAY
    }
  },
  listActive: {
    backgroundColor: common.BACKGROUND_GRAY
  },
  pager: {
    padding: '0 15px'
  },
  pagerButton: {
    borderRadius: 2,
    ':hover': {
      backgroundColor: '#abc'
    }
  },
  addClubButton: {
    width: '100%',
    fontSize: 14,
    padding: 5,
    margin: 0,
    color: '#ffffff',
    backgroundColor: '#F4F4F4',
    borderStyle: 'dotted',
    borderColor: '#f4f4f4',
    borderWidth: 3,
    textDecoration: 'none',
    ':hover': {
      color: common.MAIN_COLOR,
      borderColor: '#ffffff'
    }
  },
  addClubHelp: {
    position: 'absolute',
    backgroundColor: '#EEE',
    boxShadow: '0 5px 10px rgba(0, 0, 0, 0.2)',
    border: '1px solid #CCC',
    borderRadius: 3,
    marginLeft: -5,
    marginTop: 5,
    padding: 10
  }
};
