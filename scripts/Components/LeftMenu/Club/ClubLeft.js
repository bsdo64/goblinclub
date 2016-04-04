/**
 * Created by dobyeongsu on 2016. 3. 25..
 */
/**
 * Created by dobyeongsu on 2016. 3. 23..
 */
import React from 'react';
import _ from "lodash";
import {Link} from 'react-router';

import connectToStores from 'alt-utils/lib/connectToStores';
import ClubListStore from './ClubListStore';


if (process.env.BROWSER) {
  require('./ClubLeft.scss');
}

const ClubList = React.createClass({
  render: function() {
    var createItem = function(item) {
      return <div className="item" key={item.id}><a href={"/club/" + item.url}>{item.title}</a></div>;
    };
    return <div className="list">
      {this.props.items.map(createItem)}
      </div>
  }
});

const ClubGroupBox = React.createClass({
  render: function() {
    const createItem = function (item) {
      return <div className="item" key={item.id} >
        <div className="content">
          <div className="header">{item.title}</div>
        </div>

        <ClubList items={item.Clubs} />
      </div>
    };

    let arrayList = [];
    for(var index in this.props.items) {
      if (this.props.items.hasOwnProperty(index)) {
        arrayList.push(this.props.items[index]);
      }
    }

    return <div className="ui middle aligned divided list">
      {arrayList.map(createItem)}
    </div>
  }
});

const ClubLeft = React.createClass({
  displayName: 'ClubLeft',
  statics: {
    getStores() {
      // this will handle the listening/unlistening for you
      return [ClubListStore]
    },

    getPropsFromStores() {
      // this is the data that gets passed down as props
      return {
        ClubListStore: ClubListStore.getState()
      };
    }
  },
  render() {
    const clubGroupList = this.props.ClubListStore;
    console.log(clubGroupList);

    return (
      <div className="lft_area _side_menu">
        <h3 className="h_menu on">
          <a href="#" className="_side_item ">전체보기</a>
        </h3>

        <ClubGroupBox items={clubGroupList} />

      </div>
    );
  }
});

export default connectToStores(ClubLeft);