/**
 * Created by dobyeongsu on 2015. 10. 15..
 */
import React, { Component } from 'react';
import Radium from 'radium';
import { Link } from 'react-router';
import { Glyphicon } from 'react-bootstrap';
import connectToStores from 'alt/utils/connectToStores';
import UserStore from '../../stores/UserStore';
import PostStore from '../../stores/PostStore';

import HeadLine             from './piece/headLine';

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
        const { PostStore } = this.props;

        return (
            <div style={styles.main}>
                <div id="bestPosts" style={styles.mainBox}>
                    <HeadLine ClubStore={{club: 'name'}} />

                    <div className="nano" style={styles.contents}>
                        <div className="nano-content" style={styles.scrollContent}>
                            <div style={styles.widget.container}>
                                <div style={styles.widget.listObj}>
                                    입력하기 | 미리보기
                                </div>
                            </div>
                            <div style={styles.widget.container4}>
                                <div style={styles.widget.container2}>
                                    <div style={styles.widget.listObj1}>
                                        <input style={styles.widget.textarea1} placeholder="제목입니다" />
                                    </div>
                                    <div style={styles.widget.listObj}>
                                        <textarea style={styles.widget.textarea2} placeholder="여기에 입력하세요." />
                                    </div>
                                </div>
                                <div style={styles.widget.container3}>
                                    <div style={styles.widget.listObj}>
                                        # H1
                                        ## H2
                                        ### H3
                                        #### H4
                                        ##### H5
                                        ###### H6

                                        *asterisks*
                                        **asterisks**

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

var styles = {
    widget: {
        container: {
            listStyle: 'none',
            margin: 0,
            padding: 15,
            maxWidth: 1024,
            width: '100%',
            minWidth: 560,
            display: 'inline-block'
        },
        container2: {
            float: 'left',
            width: '70%',
            display: 'inline-block'
        },
        container4: {
            listStyle: 'none',
            margin: 0,
            padding: '0 15',
            maxWidth: 1024,
            width: '100%',
            minWidth: 560,
            display: 'inline-block'
        },
        container3: {
            float: 'right',
            paddingLeft: '15',
            width: '30%',
            display: 'inline-block'
        },
        listObj: {
            backgroundColor: '#fff',
            borderRadius: 1,
            boxShadow: '1px 1px #b0c2c0',
            padding: 15
        },
        listObj1: {
            backgroundColor: '#fff',
            borderRadius: 1,
            boxShadow: '1px 1px #b0c2c0',
            padding: 15,
            marginBottom: 15
        },
        textarea1: {
            width: "100%",
            height: 20,
            border: 'none',
        },
        textarea2: {
            width: "100%",
            height: 400,
            border: 'none',
            resize: 'vertical'
        }
    },
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
    mainBox: {
        background: "#f4f4f4",
        height: "100%",
        overflow: "hidden"
    },
    contents : {
        height: "calc(100vh - 78px)"
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
    }
};