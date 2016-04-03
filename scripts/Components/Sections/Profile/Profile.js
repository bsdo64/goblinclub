/**
 * Created by dobyeongsu on 2016. 3. 25..
 */
/**
 * Created by dobyeongsu on 2016. 3. 23..
 */
import React from 'react';

import Aside from '../../Aside/Default';

if (process.env.BROWSER) {
  require('./Profile.scss');
}

let Profile = React.createClass({
  displayName: 'Profile', render() {
    return (
      <div style={{padding: '25px'}} id="post_view">
        <div className="ui breadcrumb" >
          <a className="section" >Home</a>
          <i className="right chevron icon divider" ></i>
          <a className="section" >Registration</a>
          <i className="right arrow icon divider" ></i>
          <div className="active section" >Personal Information</div>
        </div>
        <div className="ui divider"></div>
        <div className="ui grid">
          <div className="row">
            <div className="four wide column">
              <img src="http://placehold.it/400x200" />
              <div className="ui segment top attached" >
                <div className="item" >
                  <span >등급 :</span>
                  <div style={{display: 'inline',float: 'right'}}><b >일반 회원</b></div>
                </div>
                <div className="item" >
                  <span >명성 :</span>
                  <div style={{display: 'inline',float: 'right'}}>1032 점</div>
                </div>
                <div className="item" >
                  <span >포인트 :</span>
                  <div style={{display: 'inline',float: 'right'}}>120 P</div>
                </div>
                <div className="item" >
                  <span >가입일:</span>
                  <div style={{display: 'inline',float: 'right'}}>2015.11.11</div>
                </div>
              </div>
              <div className="ui segment bottom attached" >
                <div className="item" >
                  <span >성별 :</span>
                  <div style={{display: 'inline',float: 'right'}}>남자</div>
                </div>
                <div className="item" >
                  <span >생일 :</span>
                  <div style={{display: 'inline',float: 'right'}}>2015.11.11</div>
                </div>
              </div>
            </div>
            <div className="twelve wide column">
              <div className="ui segment">
                <div className="ui header">닉네임</div>
                <div className="ui labels tiny">
                  <a className="ui label">$10.00</a>
                  <a className="ui label">$19.99</a>
                  <a className="ui label">$24.99</a>
                  <a className="ui label">$30.99</a>
                  <a className="ui label">$10.25</a>
                </div>
                <div className="ui divider"></div>
                <h4>활동 사항</h4>
                <div className="ui two statistics">
                  <div className="statistic">
                    <div className="value">
                      22
                    </div>
                    <div className="label">내가 쓴 글</div>
                  </div>
                  <div className="statistic">
                    <div className="text value">
                      32<br/>Thousand
                    </div>
                    <div className="label">내 좋아요 수</div>
                  </div>
                  <div className="statistic">
                    <div className="value">
                      <i className="plane icon"></i> 5
                    </div>
                    <div className="label">내 댓글 수</div>
                  </div>
                  <div className="statistic">
                    <div className="value">
                      42
                    </div>
                    <div className="label">
                      Team Members
                    </div>
                  </div>
                </div>
                <h4>우리집 강아지</h4>
                <div className="ui two statistics">
                  <div className="statistic">
                    <div className="value">
                      22
                    </div>
                    <div className="label">
                      Saves
                    </div>
                  </div>
                  <div className="statistic">
                    <div className="text value">
                      Three<br/>
                      Thousand
                    </div>
                    <div className="label">
                      Signups
                    </div>
                  </div>
                  <div className="statistic">
                    <div className="value">
                      <i className="plane icon"></i> 5
                    </div>
                    <div className="label">
                      Flights
                    </div>
                  </div>
                  <div className="statistic">
                    <div className="value">
                      42
                    </div>
                    <div className="label">
                      Team Members
                    </div>
                  </div>
                </div>
              </div>

              <div className="ui segment">
                <h4>활동 사항</h4>
                <div className="ui divider"></div>
                <div className="ui feed">
                  <div className="event">
                    <div className="label">
                      <img src="/images/avatar/small/elliot.jpg"/>
                    </div>
                    <div className="content">
                      <div className="summary">
                        <a className="user">
                          Elliot Fu
                        </a> added you as a friend
                        <div className="date">
                          1 Hour Ago
                        </div>
                      </div>
                      <div className="meta">
                        <a className="like">
                          <i className="like icon"></i> 4 Likes
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="event">
                    <div className="label">
                      <img src="/images/avatar/small/helen.jpg"/>
                    </div>
                    <div className="content">
                      <div className="summary">
                        <a>Helen Troy</a> added <a>2 new illustrations</a>
                        <div className="date">
                          4 days ago
                        </div>
                      </div>
                      <div className="extra images">
                        <a><img src="/images/wireframe/image.png"/></a>
                        <a><img src="/images/wireframe/image.png"/></a>
                      </div>
                      <div className="meta">
                        <a className="like">
                          <i className="like icon"></i> 1 Like
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="event">
                    <div className="label">
                      <img src="/images/avatar/small/jenny.jpg"/>
                    </div>
                    <div className="content">
                      <div className="summary">
                        <a className="user">
                          Jenny Hess
                        </a> added you as a friend
                        <div className="date">
                          2 Days Ago
                        </div>
                      </div>
                      <div className="meta">
                        <a className="like">
                          <i className="like icon"></i> 8 Likes
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="event">
                    <div className="label">
                      <img src="/images/avatar/small/joe.jpg"/>
                    </div>
                    <div className="content">
                      <div className="summary">
                        <a>Joe Henderson</a> posted on his page
                        <div className="date">
                          3 days ago
                        </div>
                      </div>
                      <div className="extra text">
                        Ours is a life of constant reruns. We're always circling back to where we'd we started, then starting all over again. Even if we don't run extra laps that day, we surely will come back for more of the same another day soon.
                      </div>
                      <div className="meta">
                        <a className="like">
                          <i className="like icon"></i> 5 Likes
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="event">
                    <div className="label">
                      <img src="/images/avatar/small/justen.jpg"/>
                    </div>
                    <div className="content">
                      <div className="summary">
                        <a>Justen Kitsune</a> added <a>2 new photos</a> of you
                        <div className="date">
                          4 days ago
                        </div>
                      </div>
                      <div className="extra images">
                        <a><img src="/images/wireframe/image.png"/></a>
                        <a><img src="/images/wireframe/image.png"/></a>
                      </div>
                      <div className="meta">
                        <a className="like">
                          <i className="like icon"></i> 41 Likes
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    );
  }
});

export default Profile;
