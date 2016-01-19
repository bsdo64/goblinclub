/**
 * Created by dobyeongsu on 2016. 1. 16..
 */
import React from 'react';
import Radium, {Style} from 'radium';
import {Pager, PageItem} from 'react-bootstrap';

import style from '../../Style/style_clublist';

const PageItemR = Radium(PageItem);
const PagerR = Radium(Pager);
const ClubPagination = React.createClass({
  displayName: 'ClubPagination',
  getInitialState() {
    return {
      activePage: 1
    };
  },

  handleSelect(event, selectedEvent) {
    this.setState({
      activePage: selectedEvent.eventKey
    });
  },

  render() {
    const styles = {
      '.pager': {
        padding: '0 15px'
      },
      '.pager li > a, .pager li > span': {
        borderRadius: 2,
        ':hover': {
          background: '#abc'
        }
      }
    };
    return (
      <div>
        <Style
          rules={style} />
        <PagerR>
          <PageItemR style={style.pager} previous href="#">{'← 이전 페이지'}</PageItemR>
          <PageItemR style={style.pager} next href="#">{'다음 페이지 →'}</PageItemR>
        </PagerR>
      </div>
    );
  }
});

export default Radium(ClubPagination);
