/**
 * Created by dobyeongsu on 2015. 10. 15..
 */
import React, { Component } from 'react';
import Radium from 'radium';
import md from '../../utils/markdown'

import HeadLine             from './piece/headLine';
import Editor               from './piece/editor';
import { editor as styles } from './piece/style_editor'
import connectToStores from 'alt/utils/connectToStores';

import PostStore from '../../stores/PostStore';

@connectToStores
@Radium
export default class WritePost extends Component {
    static getStores() {
        return [PostStore];
    }

    static getPropsFromStores() {
        return {
            PostStore: PostStore.getState()
        }
    }

    constructor() {
        super();
    }

    render() {

        var post = this.props.PostStore.post;
        return (
            <div>
                <Editor />

            </div>

        )
    }

}
