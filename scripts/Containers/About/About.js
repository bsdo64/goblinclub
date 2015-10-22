/**
 * Created by dobyeongsu on 2015. 10. 15..
 */
import React, { Component } from 'react';
import connectToStores from 'alt/utils/connectToStores';
import UserStore from '../../stores/UserStore';

@connectToStores
export default class About extends Component {

    static getStores() {
        return [UserStore];
    }

    static getPropsFromStores() {
        return UserStore.getState();
    }

    componentDidMount() {

    }

    render () {
        return (
            <div>
                Hello - About
            </div>
        )
    }
}
