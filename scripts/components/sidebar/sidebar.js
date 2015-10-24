/**
 * Created by dobyeongsu on 2015. 10. 15..
 */
import React, { Component } from 'react';
import Radium from 'radium';
import connectToStores from 'alt/utils/connectToStores'
import UserStore from '../../stores/UserStore';
import {
    Input
} from 'react-bootstrap';

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
        const { auth } = this.props;

        return (
            <div style={styles.base}>
                <div id='searchClub' style={styles.searchClub.base}>
                    <div id='searchClubContainer' style={styles.searchClub.container}>
                        <Input
                            standalone
                            type="text"
                            placeholder="Enter text"
                            ref="input" />
                    </div>
                </div>

                <hr />

                <div id='clubs'>
                    <div id='clubsContainer' style={styles.clubsContainer}>
                        <ul>
                            <li>게임</li>
                            <li>코딩</li>
                            <li>프로그래머</li>
                        </ul>
                        { auth.token &&
                            <ul>
                                <li>{auth.user.email}</li>
                                <li>{auth.user.email}</li>
                                <li>{auth.user.email}</li>
                            </ul>
                        }
                    </div>
                </div>
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
    },
    searchClub : {
        base : {
            marginTop: 20
        },
        container: {
            width: '90%',
            margin: 'auto'
        }
    },
    clubsContainer : {

    }
};