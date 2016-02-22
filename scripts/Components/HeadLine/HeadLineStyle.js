function HeadLine() {}
HeadLine.prototype = {
  container: {
    background: '#2b5f5b',
    height: 26
  },
  menu: {
    float: 'right',
    padding: '2px 15px 0 0'
  },
  menuItem: {
    color: '#fff',
    margin: '0 5px',
    fontSize: 12
  },
  subs: {
    padding: '5px 0 0 15px',
    color: '#10D5B0'
  },
  title: {
    display: 'inline-block',
    margin: 0,
    paddingLeft: 15,
    paddingTop: 5,
    fontSize: 14,
    fontWeight: 'normal',
    color: '#fff'
  },
  menuCaret: {
    position: 'relative',
    color: '#F1F1F1',
    ':hover': {
      color: '#FFF'
    }
  },
  dropdown: {
    margin: 0,
    padding: 0,
    position: 'absolute',
    top: 18,
    right: 5,
    width: 43,
    background: '#FFF',
    zIndex: 1,
    listStyle: 'none',
    boxShadow: '1px 1px #b0c2c0'
  },
  dropdownItem: {
    fontSize: 12,
    borderBottom: '1px solid #aaa',
    padding: '3px 5px',
    color: '#295A57',
    ':hover': {
      color: '#fff',
      backgroundColor: '#295A57'
    }
  }
};

export default new HeadLine();
