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
                <div className="six wide column">
                  <select className="ui search dropdown selection">
                    <option value="">State</option>
                    <option value="AL">Alabama</option>
                    <option value="AK">Alaska</option>
                    <option value="AZ">Arizona</option>
                    <option value="AR">Arkansas</option>
                    <option value="CA">California</option>
                    <option value="CO">Colorado</option>
                    <option value="CT">Connecticut</option>
                    <option value="DE">Delaware</option>
                    <option value="DC">District Of Columbia</option>
                    <option value="FL">Florida</option>
                    <option value="GA">Georgia</option>
                    <option value="HI">Hawaii</option>
                    <option value="ID">Idaho</option>
                    <option value="IL">Illinois</option>
                    <option value="IN">Indiana</option>
                    <option value="IA">Iowa</option>
                    <option value="KS">Kansas</option>
                    <option value="KY">Kentucky</option>
                    <option value="LA">Louisiana</option>
                    <option value="ME">Maine</option>
                    <option value="MD">Maryland</option>
                    <option value="MA">Massachusetts</option>
                    <option value="MI">Michigan</option>
                    <option value="MN">Minnesota</option>
                    <option value="MS">Mississippi</option>
                    <option value="MO">Missouri</option>
                    <option value="MT">Montana</option>
                    <option value="NE">Nebraska</option>
                    <option value="NV">Nevada</option>
                    <option value="NH">New Hampshire</option>
                    <option value="NJ">New Jersey</option>
                    <option value="NM">New Mexico</option>
                    <option value="NY">New York</option>
                    <option value="NC">North Carolina</option>
                    <option value="ND">North Dakota</option>
                    <option value="OH">Ohio</option>
                    <option value="OK">Oklahoma</option>
                    <option value="OR">Oregon</option>
                    <option value="PA">Pennsylvania</option>
                    <option value="RI">Rhode Island</option>
                    <option value="SC">South Carolina</option>
                    <option value="SD">South Dakota</option>
                    <option value="TN">Tennessee</option>
                    <option value="TX">Texas</option>
                    <option value="UT">Utah</option>
                    <option value="VT">Vermont</option>
                    <option value="VA">Virginia</option>
                    <option value="WA">Washington</option>
                    <option value="WV">West Virginia</option>
                    <option value="WI">Wisconsin</option>
                    <option value="WY">Wyoming</option>
                  </select>
                </div>
                <div className="ten wide column">
                  <div className="ui input fluid large">
                    <input type="text" placeholder="제목을 입력하세요" />
                  </div>
                </div>
              </div>
              <div className="ui meta">
                <span>닉네임</span><span>|</span><span>클럽 &gt;
                모발샴푸</span>
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
