/**
 * Created by dobyeongsu on 2015. 10. 15..
 */
import React, { Component } from 'react';
import Radium from 'radium';

import connectToStores from 'alt/utils/connectToStores';
import PostStore from '../../Stores/PostStore';
import ClubStore from '../../Stores/ClubStore';

import { Editor }           from '../../Components/index';
import { editor as styles } from '../../Components/Main/style/style_editor'

class WritePost extends Component {
    static getStores() {
        return [PostStore, ClubStore];
    }

    static getPropsFromStores() {
        return {
            PostStore: PostStore.getState(),
            ClubStore: ClubStore.getState()
        }
    }

    constructor() {
        super();
    }

    componentWillReceiveProps(nextProps) {
        console.log('componentWillReceiveProps');
        if(nextProps.PostStore.writeSuccess) {
            this.props.history.pushState(null, '/')
        }
    }

    render() {
        return (
            <div>
                <Editor
                    {...this.props}
                    ClubStore={this.props.ClubStore}
                />

            </div>

        )
    }
}
export default WritePost = connectToStores(Radium(WritePost));