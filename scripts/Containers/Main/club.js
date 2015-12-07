/**
 * Created by dobyeongsu on 2015. 11. 13..
 */
import React, { Component } from 'react';
import Radium from 'radium';
import _ from 'lodash';
import connectToStores from '../../../node_modules/alt/utils/connectToStores';
import UserStore from '../../Stores/UserStore';
import PostStore from '../../Stores/PostStore';

import { ClubPostList, HeadLine } from '../../Components/index'
import styles from '../../Components/Style/style_post';

class Club extends Component {
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
        super(...props)
    }

    componentDidMount() {
        console.log('Club, componentDidMount');
    }

    componentWillMount() {
        console.log('Club, componentWillMount');
        console.log(this.props.history);
    }

    render() {
        const { postList } = this.props.PostStore;
        const wrapper = function (posts) {
            return posts.map((post) => {
                return <ClubPostList key={post._id} post={post}/>;
            });
        };
        return (
            !_.isEmpty(postList) &&
            <div>
                <ul style={styles.posts.container}>
                    { wrapper(postList) }
                </ul>
            </div>
        )
    }
}
export default Club = connectToStores(Radium(Club));