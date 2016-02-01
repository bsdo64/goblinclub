/**
 * Created by dobyeongsu on 2015. 10. 15..
 */
import React from 'react';
import Radium from 'radium';
import {Input, Button} from 'react-bootstrap';

import connectToStores from '../../../../node_modules/alt-utils/lib/connectToStores';
import PostStore from '../../../Flux/Stores/PostStore';
import ClubStore from '../../../Flux/Stores/ClubStore';

import ClubActions from '../../../Flux/Actions/ClubActions';

import style from '../../Style/Editor';

let WriteClub = React.createClass({
  displayName: 'WriteClub',
  propTypes: {

  },
  componentWillReceiveProps(nextProps) {
    console.log('componentWillReceiveProps');
  },
  handleSubmitClub() {
    let club = {
      name: this.refs.name.getValue(),
      url: this.refs.url.getValue(),
      description: this.refs.description.getValue()
    };
    ClubActions.submitClub(club);
  },
  render() {
    return (
      <div>
        <form className="form-horizontal" style={style.widget.container}>
          <div style={style.widget.listObj}>
            <Input type="text"
                   ref="name"
                   help="클럽을 대표하는 유일한 이름을 지정합니다. (필수)"
                   label="클럽 이름"
                   labelClassName="col-xs-2"
                   wrapperClassName="col-xs-10" />
            <Input type="text"
                   ref="url"
                   help="클럽을 대표하는 URL 주소를 지정합니다. (필수) ex) gobblin -> /club/gobblin"
                   label="클럽 URL"
                   labelClassName="col-xs-2"
                   wrapperClassName="col-xs-10" />
            <Input type="text"
                   ref="description"
                   help="간단한 클럽 소개글 입니다."
                   label="클럽 소개글"
                   labelClassName="col-xs-2"
                   wrapperClassName="col-xs-10" />

            <div className="form-group">
              <div className="col-xs-offset-2 col-xs-10">
                <Button onClick={this.handleSubmitClub} label="Checkbox">클럽 만들기</Button>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
});

WriteClub = connectToStores({
  getStores() {
    // this will handle the listening/unlistening for you
    return [PostStore, ClubStore];
  },

  getPropsFromStores() {
    // this is the data that gets passed down as props
    return {
      PostStore: PostStore.getState(),
      ClubStore: ClubStore.getState()
    };
  }
}, Radium(WriteClub));

export default WriteClub;
