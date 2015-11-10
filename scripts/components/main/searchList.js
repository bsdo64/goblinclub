/**
 * Created by dobyeongsu on 2015. 10. 15..
 */
import React, { Component } from 'react';
import Radium, { Style } from 'radium';
import { Link } from 'react-router';
import { Glyphicon } from 'react-bootstrap';
import connectToStores from 'alt/utils/connectToStores';
import UserStore from '../../stores/UserStore';
import PostStore from '../../stores/PostStore';

@Radium
class BtnArea extends Component {
    render() {
        const id = this.props.id;
        return (
            <div style={styles.posts.postButtons} className="btn_area" >
                <a key={id+'thumbUp'} style={styles.posts.thumbUp} >
                    <i className="fa fa-thumbs-o-up"></i>
                </a>
                <a key={id+'thumbDown'} style={styles.posts.thumbDown} >
                    <i className="fa fa-thumbs-o-down"></i>
                </a>
                <a key={id+'commentButton'} style={styles.posts.commentButton} >
                    <i className="fa fa-commenting-o"></i>
                </a>
            </div>
        )
    }
}

@connectToStores
@Radium
export default class Main extends Component {
    static getStores() {
        return [UserStore, PostStore];
    }

    static getPropsFromStores() {
        return {
            UserStore : UserStore.getState(),
            PostStore : PostStore.getState()
        }
    }

    componentDidMount () {
        $('.nano').nanoScroller();
        $('.nano-content').scrollTop(500)
    }

    render() {
        const { loadSuccess, posts } = this.props.PostStore;

        let postList;
        var createItem = (post, key) => {
            const { title, createdAt, clubs, content, user, vote_count, comment_count, _id } = post;

            return (
                <li style={styles.posts.post} className="_ccast_item" key={_id}>
                    <div style={styles.posts.listObj} className="lst_obj">
                        <div className="desc_bx">
                            <div className="con_desc">
                                <h4 style={styles.posts.postTitle}>
                                    <Link to="/" style={styles.posts.postTitleItem}
                                       className="N=a:sbx*c.content _ccast_item_url"
                                       href="http://cafe.naver.com/joonggonara/287427195"
                                       target="_blank">{title}</Link>
                                </h4>
                                <p style={styles.posts.postContentMeta} className="frm_svc">
                                    <span className="h_title">
                                        <a className="N=a:sbx*c.content" href="http://cafe.naver.com/joonggonara/member/qkrtlaud0647/article" target="_blank">{user.nick} </a>
                                    </span>
                                    <span className="wrt_time">{createdAt} </span>
                                    <Link to="/" style={styles.posts.postTitleClub}>/club/{clubs[0].url}</Link>
                                </p>
                                <div className="lst_type2">
                                    <div style={styles.posts.postContents} className="rgt_dsc">
                                        <div className="fd_cont">
                                            <a className="N=a:sbx*c.content _ccast_item_url"
                                               href="http://cafe.naver.com/joonggonara/287427195"
                                               target="_blank">{content}</a>
                                        </div>
                                    </div>
                                    <BtnArea id={_id} />
                                </div>
                            </div>
                        </div>
                        <div className="ic_bookmark">
                            <a style={styles.posts.voteCount} className="_bookmark_icon N=a:sbx*c.bmk" href="#" title="추천하기">{vote_count} 점 </a>
                            <a style={styles.posts.commentCount} className="_bookmark_icon N=a:sbx*c.bmk" href="#" title="추천하기">댓글 {comment_count} 개</a>
                            <a style={styles.posts.deleteButton} className="N=a:sbx*c.del feed_del _ccast_button_delete">삭제하기</a>
                        </div>
                    </div>
                </li>
            )
        };
        if (loadSuccess) {
            postList = <ul style={styles.posts.container}>{posts.map(createItem)}</ul>
        }

        console.log(this.props);
        return (
            <div style={styles.main}>
                <Style rules={{
                  "#bestPosts" : {
                    background: "#f4f4f4",
                    height: "100%",
                    overflow: "hidden"
                  },
                  '.btn_area a:hover' : {
                    color: 'red'
                  }
                }} />
                <div id="bestPosts">
                    <div style={styles.headLine.container}>
                        <div style={styles.headLine.menu} >
                            <span  className="on">
                                <a style={styles.headLine.menuItem} href="#" >최신순</a>
                            </span>
                            <span>|</span>
                            <span  className="">
                                <a style={styles.headLine.menuItem} href="#" >인기순</a>
                            </span>
                        </div>
                        <h2 style={styles.headLine.title}>오늘의 베스트</h2>
                    </div>
                    <div className="nano" style={styles.contents}>
                        <div className="nano-content" style={styles.scrollContent}>

                            { loadSuccess && postList }

                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

var styles = {
    main : {
        position: "relative",
        overflow: "hidden",
        marginTop: "50px",
        marginLeft: "240px",
        marginRight: "340px",
        boxSizing: "border-box",
        backgroundColor: "#aaa",
        height: "100%",
        minHeight: 600,
        minWidth: 565,
        borderTop: '1px solid #111',
        borderLeft: '1px solid #111',
        borderRight: '1px solid #111',
        borderBottom: 'none'
    },
    scrollContent: {
        right: 0,
        width: "auto",
        height: "auto",
        overflow: "hidden",
        overflowY: "scroll",
        bottom: 0,
        left: 0,
        top: 0
    },
    headLine : {
        container: {
            background: "#2b5f5b",
            height: 26
        },
        menu : {
            position: 'absolute',
            right: 10,
            top: 2
        },
        menuItem: {
            color: '#fff',
            margin: '0 5px',
            fontSize: 12
        },
        title: {
            margin: 0,
            padding: '5px 0 0 15px',
            fontSize: 15,
            color: '#fff'
        }
    },
    contents : {
        height: "calc(100vh - 78px)"
    },
    posts: {
        container: {
            listStyle: 'none',
            margin: 0,
            padding: 15,
            maxWidth: 1024,
            width: '100%',
            minWidth: 560,
            display: 'inline-block'
        },
        post: {
            listStyle: 'none',
            marginBottom: 10
        },
        listObj: {
            backgroundColor: '#fff',
            borderRadius: 1,
            boxShadow: '1px 1px #b0c2c0',
            padding: 15
        },
        postTitle: {
            margin: 0,
            padding: '0 0 5px 0',
            borderBottom: '1px solid #b0c2c0'
        },
        postTitleItem: {
            color: '#000',
            fontSize: '18px',
            fontWeight: 'bold'
        },
        postTitleClub: {
            color: '#00A99E',
            fontSize: 11,
            fontWeight: 'bold'
        },
        postContentMeta: {
            margin: '9px 0',
            fontSize: 10
        },
        postContents: {
            margin: '5px 0'
        },
        postButtons: {
            margin: '10px 0'
        },
        voteCount: {
            fontSize: 12,
            color: '#aaa'
        },
        commentCount: {
            fontSize: 12,
            color: '#aaa'
        },
        deleteButton: {
            float: 'right',
            fontSize: 12,
            color: '#aaa'
        },
        thumbUp: {
            fontSize: 12,
            color: '#aaa',
            padding: '5px 10px',
            ':hover': {
                color: 'red'
            }
        },
        thumbDown: {
            fontSize: 12,
            color: '#aaa',
            padding: '5px 10px',
            ':hover': {
                color: 'red'
            }
        },
        commentButton: {
            fontSize: 12,
            color: '#aaa',
            padding: '5px 10px',
            ':hover': {
                color: 'red'
            }
        }
    }
};