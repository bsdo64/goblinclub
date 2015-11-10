/**
 * Created by dobyeongsu on 2015. 11. 10..
 */
import React, { Component } from 'react';
import Radium from 'radium';
import _ from 'lodash';

import HeadLine             from './headLine'
import BestListItemWrapper  from './bestListItemWrapper'
import ClubListItemWrapper  from './clubListItemWrapper'
import PostItemWrapper      from './postItemWrapper'

@Radium
export default class listWrapper extends Component {
    render() {
        const { loadSuccess, posts, type } = this.props.PostStore;

        const wrapperSelector = function (type, posts) {
            switch(type){
                case 'best':
                    return posts.map((post) => {
                        return <BestListItemWrapper key={post._id} post={post}/>;
                    });
                case 'club':
                    return posts.map((post) => {
                        return <ClubListItemWrapper key={post._id} post={post}/>;
                    });
                case 'post':
                    return posts.map((post) => {
                        return <PostItemWrapper key={post._id} post={post}/>;
                    });
                default:
                    return posts.map((post) => {
                        return <ClubListItemWrapper key={post._id} post={post}/>;
                    });
            }
        };

        return (
            loadSuccess && !_.isEmpty(posts) &&
            <div>
                <div>
                    <ul style={styles.posts.container}>
                        { wrapperSelector(type, posts) }
                    </ul>

                {  type === 'post' &&
                    <ul style={styles.posts.container}>
                        <li><HeadLine /></li>
                        { wrapperSelector('club', posts) }
                    </ul>
                }

                </div>
            </div>
        )
    }
}

var styles = {
    posts: {
        container: {
            listStyle: 'none',
            margin: 0,
            padding: 15,
            maxWidth: 1024,
            width: '100%',
            minWidth: 560,
            display: 'inline-block'
        }
    }
}