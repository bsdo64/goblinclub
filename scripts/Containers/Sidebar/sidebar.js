/**
 * Created by dobyeongsu on 2015. 10. 15..
 */
import React, { Component } from 'react';
import Radium from 'radium';
import { Link } from 'react-router';

import connectToStores from '../../../node_modules/alt/utils/connectToStores'
import UserStore from '../../Stores/UserStore';
import ClubStore from '../../Stores/ClubStore';

import { ClubList } from '../../Components/index'

class Sidebar extends Component {

    static getStores() {
        return [UserStore, ClubStore]
    }

    static getPropsFromStores() {
        return {
            UserStore : UserStore.getState(),
            ClubStore : ClubStore.getState()
        }
    }

    componentWillReceiveProps(nextProps) {
        console.log('Sidebar', nextProps);
    }

    render() {
        const { auth, user } = this.props.UserStore;
        const { defaultClubList, userHas } = this.props.ClubStore;

        console.log('ClubStore', this.props.ClubStore);
        return (
            <div style={styles.base}>
                <div id='clubs'>
                    <div id='clubsContainer' style={styles.clubs.container}>
                        <ul style={styles.clubs.element}>
                            <li style={styles.clubs.title}>베스트</li>
                            <ul style={styles.clubs.list}>
                                <li >
                                    <Link to="/club">
                                        <div key={1} style={[styles.clubs.listElement, styles.clubs.listActive]}>오늘의 베스트</div>
                                    </Link>
                                </li>
                            </ul>
                        </ul>
                        <ul style={styles.clubs.element}>
                            <li key={2} style={styles.clubs.title}>핫 클럽</li>
                            <ul style={styles.clubs.list}>
                                <li>
                                    <Link to="/club/starcraft2">
                                        <div key={4} style={styles.clubs.listElement}>스타2</div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/">
                                        <div key={5} style={styles.clubs.listElement}>리그오브레전드</div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/submit">
                                        <div key={6} style={styles.clubs.listElement}>리그오브레전드</div>
                                    </Link>
                                </li>
                            </ul>
                        </ul>
                        { defaultClubList.length &&
                            <ClubList
                                title="메인 클럽"
                                clubList={defaultClubList}
                            />
                        }

                        { auth.token &&
                            <ClubList
                                title="구독 클럽"
                                clubList={userHas.subscribedClubList}
                            />
                        }
                    </div>
                </div>
            </div>
        )
    }
}
export default Sidebar = connectToStores(Radium(Sidebar));

var styles = {
    base : {
        position: "absolute",
        right: 0,
        top : 50,
        bottom: 0,
        backgroundColor: "#e7efef",
        width: 340,
        minHeight: 600,
        borderTop: '1px solid #111',
        '@media (max-width: 1145px)': {
            width: 'calc(100% - 805px)'
        }
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
    clubs : {
        container: {
            color : '#00B1A3',
            fontSize: 13,
            fontWeight: 'bold',
            paddingTop: 26
        },
        element: {
            listStyle: 'none',
            margin: 0,
            padding: '0 0 15px 0'
        },
        title: {
            listStyle: 'none',
            fontSize: 13,
            paddingLeft: 17
        },
        list: {
            listStyle: 'none',
            margin: 0,
            padding: 0,
            color: '#2b5f5b'
        },
        listElement: {
            listStyle: 'none',
            paddingLeft: 32,
            color: '#001f35',
            ':hover': {
                backgroundColor: '#2b5f5b',
                color: "#fff"
            }
        },
        listActive: {
            backgroundColor: '#2b5f5b',
            color: "#fff"
        }
    }
};