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
import BestListItemWrapper  from './bestListItemWrapper'
import styles from './style_post';

@connectToStores
@Radium
export default class Best extends Component {
    static getStores() {
        return [UserStore, PostStore];
    }

    static getPropsFromStores() {
        return {
            UserStore: UserStore.getState(),
            PostStore: PostStore.getState()
        }
    }

    componentDidMount() {
        console.log('Best, componentDidMount');
    }

    componentWillMount() {
        console.log('Best, componentWillMount');
    }

    render() {
        const { loadSuccess, posts } = this.props.PostStore;
        const wrapper = function (posts) {
            return posts.map((post) => {
                return <BestListItemWrapper key={post._id} post={post}/>;
            });
        };
        return (
            loadSuccess && !_.isEmpty(posts) &&
            <div>
                <div>
                    <ul style={styles.posts.container}>
                        { wrapper(posts) }
                    </ul>
                </div>
            </div>
        )
    }
}