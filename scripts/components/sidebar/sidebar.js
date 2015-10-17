/**
 * Created by dobyeongsu on 2015. 10. 15..
 */
import React, { Component } from 'react';
import Radium from 'radium';
import connectToStores from 'alt/utils/connectToStores'
import UserStore from '../../stores/UserStore';

@connectToStores
@Radium
export default class sidebar extends Component {

    static getStores() {
        return [UserStore]
    }

    static getPropsFromStores() {
        return UserStore.getState();
    }

    render() {
        let user;
        if(this.props.user) {
            user = <p>{this.props.user.name}</p>
        }
        return (
            <div style={styles.base}>
                sidebar
                {user}
            </div>
        )
    }
}

var styles = {
    base : {
        position: "absolute",
        right: 0,
        top : 50,
        bottom: 0,
        backgroundColor: "#bbb",
        width: "340px"
    }
};