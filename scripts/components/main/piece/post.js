/**
 * Created by dobyeongsu on 2015. 11. 13..
 */
import React, { Component } from 'react';
import Radium from 'radium';
import _ from 'lodash';
import connectToStores from 'alt/utils/connectToStores';
import UserStore from '../../../stores/UserStore';
import PostStore from '../../../stores/PostStore';

import HeadLine             from './headLine'
import PostItemWrapper  from './PostItemWrapper'
import ClubListItemWrapper  from './clubListItemWrapper'

import styles from './style_post';

@connectToStores
@Radium
export default class listWrapper extends Component {
    static getStores() {
        return [UserStore, PostStore];
    }

    static getPropsFromStores() {
        return {
            UserStore: UserStore.getState(),
            PostStore: PostStore.getState()
        }
    }

    render() {
        const { loadSuccess, posts } = this.props.PostStore;
        const wrapper = function (posts) {
            return posts.map((post) => {
                return <PostItemWrapper key={post._id} post={post}/>;
            });
        };
        const listWrapper = function (posts) {
            return posts.map((post) => {
                return <ClubListItemWrapper key={post._id} post={post}/>;
            });
        }
        return (
            loadSuccess && !_.isEmpty(posts) &&
            <div>
                <div>
                    <ul style={styles.posts.container}>
                        { wrapper(posts) }
                    </ul>
                    <ul style={styles.posts.container}>
                        <li><HeadLine /></li>
                        { listWrapper(posts) }
                    </ul>
                </div>
            </div>
        )
    }
}