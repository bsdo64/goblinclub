/**
 * Created by dobyeongsu on 2015. 10. 19..
 */
import React, { Component } from 'react';

import connectToStores from 'alt/utils/connectToStores';
import UserStore from '../../stores/UserStore';

@connectToStores
export default class User extends Component {

    static getStores() {
        return [UserStore];
    }

    static getPropsFromStores() {
        return UserStore.getState();
    }

    render() {
        console.log(this.props);
        return (
            <div>Hello</div>
        )
    }
}