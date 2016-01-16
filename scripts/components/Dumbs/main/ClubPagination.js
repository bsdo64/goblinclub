/**
 * Created by dobyeongsu on 2016. 1. 16..
 */
import React from 'react';
import Radium from 'radium';
import {Pagination} from 'react-bootstrap';

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
    return (
      <Pagination
        activePage={this.state.activePage}
        ellipsis
        first
        items={20}
        last
        maxButtons={5}
        next
        onSelect={this.handleSelect}
        prev />
    );
  }
});

export default Radium(ClubPagination);
