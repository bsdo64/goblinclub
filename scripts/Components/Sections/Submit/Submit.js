/**
 * Created by dobyeongsu on 2016. 3. 25..
 */
/**
 * Created by dobyeongsu on 2016. 3. 23..
 */
import React from 'react';
import {medium, mediumInsertConfig} from './config';
import _ from 'lodash';

import SubmitSectionStore from './SubmitSectionStore';
import UserStore from '../../../Flux/Stores/UserStore';
import SubmitActions from './SubmitActions';
import connectToStores from 'alt-utils/lib/connectToStores';

if (process.env.BROWSER) {
  require('./Submit.scss');
}

let Submit = React.createClass({
  displayName: 'Submit',
  getInitialState() {
    return {
      prefixValue: '',
      tags: []
    };
  },
  statics: {
    getStores() {
      // this will handle the listening/unlistening for you
      return [SubmitSectionStore, UserStore];
    },

    getPropsFromStores() {
      // this is the data that gets passed down as props
      return {
        SubmitSectionStore: SubmitSectionStore.getState(),
        UserStore: UserStore.getState()
      };
    }
  },
  componentDidMount() {
    this.editor = new MediumEditor('#content-editor', medium);
    $('#content-editor').mediumInsert(mediumInsertConfig(this.editor));

    $('.ui.dropdown')
      .dropdown();
  },

  serializeContent() {
    const allContents = this.editor.serialize();
    const elContent = allContents["content-editor"].value;

    SubmitActions.requestSubmitPost(this.props.SubmitSectionStore.id, {
      title: this.refs.title.value,
      content: elContent,
      prefix: this.refs.prefix.value,
      tags: this.state.tags
    });
  },
  sanitizeTag(e) {
    let value = e.target.value;
    let myRe = /\B#([A-za-z가-힣0-9]{2,})(?![~!@#$%^&*()=+_`\-\|\/'\[\]\{\}]|[?.,]*\w)/ig;
    let matchArray = value.match(myRe);
    let hashWithTags = _.compact(matchArray);

    let tags = _.map(hashWithTags, (tag) => { return tag.replace('#', '')});

    this.setState({tags: tags});
  },
  handleSelect(event) {
    this.setState({prefixValue: event.target.value});
  },
  render() {
    const { ClubGroup, id, title, url, Prefixes, submitSuccess } = this.props.SubmitSectionStore;
    const { user } = this.props.UserStore;
    const { prefixValue } = this.state;

    function createItem (item) {
      return <option value={item.id}>{item.name}</option>;
    }
    
    if (submitSuccess) {
      location.href = '/club/' + url + '/' + submitSuccess;
    }
    
    return (
      <div style={{padding: '25px'}} id="submit_view">
        <div className="ui breadcrumb">
          <a className="section">{ClubGroup.title}</a>
          <i className="right chevron icon divider"></i>
          <a className="section">{title}</a>
          <i className="right arrow icon divider"></i>
          <div className="active section">글쓰기</div>
        </div>
        <div id="" className="ui items">
          <div className="ui item">
            <div className="ui tiny image">
              <img src="http://dummyimage.com/40x40"/>
            </div>
            <div className="ui content">
              <div className="ui grid">
                <div className="four wide column">
                  <select ref="prefix" onChange={this.handleSelect} value={prefixValue} className="ui search dropdown selection fluid">
                    <option value="">말머리 선택</option>
                    {Prefixes.map(createItem)}
                  </select>
                </div>
                <div className="twelve wide column">
                  <div className="ui input fluid">
                    <input ref="title" type="text" placeholder="제목을 입력하세요" />
                  </div>
                </div>
              </div>
              <div className="ui extra">
                <div className="ui horizontal divided list">
                  <div className="item primary">
                    {user && user.nick}
                  </div>
                  <div className="item">
                    {ClubGroup.title + ' > '}<a href={'/club/' + url}>{title}</a>
                  </div>
                </div>
              </div>
              <div className="ui description">
                <div className="ui form">
                  <div className="ui field segment" style={{minHeight: 150}}>
                    <div id="content-editor" ></div>
                  </div>
                </div>
              </div>
              <div className="ui extra">
                <div className="ui icon fluid input">
                  <input type="text" placeholder="#태그를 입력해보세요! 태그는 #로 구분합니다" onChange={this.sanitizeTag} />
                    <i className="tag icon"></i>
                </div>
              </div>
              <div className="ui hidden divider"></div>
              <div className="ui extra" >
                <button className="ui primary button tiny" onClick={this.serializeContent}>
                  저장
                </button>
              </div>
            </div>
          </div>

        </div>
    </div>
    );
  }
});

export default connectToStores(Submit);
