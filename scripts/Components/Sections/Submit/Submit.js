/**
 * Created by dobyeongsu on 2016. 3. 25..
 */
/**
 * Created by dobyeongsu on 2016. 3. 23..
 */
import React from 'react';
import {medium, mediumInsertConfig} from './config';
import _ from 'lodash';
import Aside from '../../Aside/Default';

if (process.env.BROWSER) {
  require('./Submit.scss');
}

let Submit = React.createClass({
  displayName: 'Submit',
  componentDidMount() {
    this.editor = new MediumEditor('#content-editor', medium);
    $('#content-editor').mediumInsert(mediumInsertConfig(this.editor));

    $('.ui.dropdown')
      .dropdown()
    ;
  },

  serializeContent() {
    var allContents = this.editor.serialize();
    var elContent = allContents["content-editor"].value;
    console.log(elContent);
  },
  sanitizeTag(e) {
    let value = e.target.value;
    let myRe = /\B#([A-za-z가-힣0-9]{2,})(?![~!@#$%^&*()=+_`\-\|\/'\[\]\{\}]|[?.,]*\w)/ig;
    let matchArray = value.match(myRe);
    console.log(_.compact(matchArray));
  },
  render() {
    return (
      <div style={{padding: '25px'}} id="submit_view">
        <div className="ui breadcrumb">
          <a className="section">Home</a>
          <i className="right chevron icon divider"></i>
          <a className="section">Registration</a>
          <i className="right arrow icon divider"></i>
          <div className="active section">Personal Information</div>
        </div>
        <div id="" className="ui items">
          <div className="ui item">
            <div className="ui tiny image">
              <img src="http://placehold.it/40x40"/>
            </div>
            <div className="ui content">
              <div className="ui grid">
                <div className="four wide column">
                  <select className="ui search dropdown selection fluid">
                    <option value="">말머리 선택</option>
                    <option value="1">공지</option>
                  </select>
                </div>
                <div className="twelve wide column">
                  <div className="ui input fluid">
                    <input type="text" placeholder="제목을 입력하세요" />
                  </div>
                </div>
              </div>
              <div className="ui extra">
                <div className="ui horizontal divided list">
                  <div className="item primary">
                    닉네임
                  </div>
                  <div className="item">
                    클럽 > 모발 샴푸
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

export default Submit;
