/**
 * Created by dobyeongsu on 2015. 11. 13..
 */
import common from './../../Lib/Style/common';

const COLOR = common.COLOR;

function ClubList() {}
ClubList.prototype = {
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
    color: COLOR.WHITE,
    backgroundColor: COLOR.MAIN_COLOR_NORMAL,
    height: '26px',
    lineHeight: '26px'
  },
  list: {
    listStyle: 'none',
    margin: 0,
    padding: 0,
    color: COLOR.MAIN_COLOR_NORMAL
  },
  listElement: {
    paddingLeft: 25,
    color: COLOR.MAIN_COLOR_NORMAL,
    margin: '2px 0 2px 0',
    height: '22px',
    lineHeight: '22px',
    fontWeight: 500,
    fontSize: 12,
    backgroundColor: '#fff',
    ':hover': {
      backgroundColor: COLOR.BACKGROUND_GRAY
    }
  },
  listActive: {
    backgroundColor: COLOR.BACKGROUND_GRAY
  },
  pager: {
    padding: '0 15px'
  },
  addClubButton: {
    width: '100%',
    fontSize: 14,
    padding: 5,
    margin: 0,
    color: COLOR.WHITE,
    backgroundColor: COLOR.BACKGROUND_GRAY,
    borderStyle: 'dotted',
    borderColor: COLOR.BACKGROUND_GRAY,
    borderWidth: 3,
    textDecoration: 'none',
    ':hover': {
      color: COLOR.MAIN_COLOR_NORMAL,
      borderColor: COLOR.WHITE
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
  },
  searchInput: {
    border: 'none',
    width: 'calc(100% - 14px)',
    fontSize: 13,
    padding: '3px 8px',
    background: 'none'
  }
};

export default new ClubList();
