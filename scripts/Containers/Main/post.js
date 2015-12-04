/**
 * Created by dobyeongsu on 2015. 11. 13..
 */
import React, { Component } from 'react';
import Radium from 'radium';
import _ from 'lodash';

import connectToStores from '../../../node_modules/alt/utils/connectToStores';
import UserStore from '../../Stores/UserStore';
import PostStore from '../../Stores/PostStore';
import PostActions from '../../Actions/PostActions';

import { PostPage, ClubPostList, HeadLine } from '../../Components/index';

import styles from '../../Components/Main/style/style_post';

class Post extends Component {
    static getStores() {
        return [UserStore, PostStore];
    }

    static getPropsFromStores() {
        return {
            UserStore: UserStore.getState(),
            PostStore: PostStore.getState()
        }
    }

    constructor(...props) {
        super(...props);
    }

    componentDidMount() {
        console.log('Post, componentDidMount');
    }

    componentWillMount() {
        if(!this.props.PostStore.postList) {
            var params = this.props.params;
            PostActions.getClubPostLists(params);
        }
    }

    render() {
        const { readingPost, postList } = this.props.PostStore;
        const wrapper = function (post) {
            return <PostPage key={post._id} post={post}/>;
        };
        const listWrapper = function (posts) {
            return posts.map((post) => {
                return <ClubPostList key={post._id} post={post}/>;
            });
        };
        return (
            !_.isEmpty(readingPost) &&
            <div>
                <div>
                    <ul style={styles.posts.container}>
                        { wrapper(readingPost) }
                    </ul>
                    <ul style={styles.posts.container}>
                        <li><HeadLine /></li>
                        { listWrapper(postList) }
                    </ul>
                </div>
            </div>
        )
    }
}
export default Post = connectToStores(Radium(Post));