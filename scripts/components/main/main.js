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
import ListWrapper          from './piece/listWrapper';

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
                            <ListWrapper PostStore={PostStore} />
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