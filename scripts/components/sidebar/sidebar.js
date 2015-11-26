/**
 * Created by dobyeongsu on 2015. 10. 15..
 */
import React, { Component } from 'react';
import Radium from 'radium';
import { Link } from 'react-router';
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
        return {
            UserStore : UserStore.getState()
        }
    }

    render() {
        const { auth, user } = this.props.UserStore;

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
                        <ul style={styles.clubs.element}>
                            <li key={2} style={styles.clubs.title}>메인 클럽</li>
                            <ul style={styles.clubs.list}>
                                <li key={7} style={styles.clubs.listElement}>게임</li>
                                <li key={8} style={styles.clubs.listElement}>프로그래밍</li>
                                <li key={9} style={styles.clubs.listElement}>가상현실</li>
                                <li key={10} style={styles.clubs.listElement}>게임엔진</li>
                                <li key={11} style={styles.clubs.listElement}>그래픽</li>
                                <li key={12} style={styles.clubs.listElement}>전기전자</li>
                            </ul>
                        </ul>
                        <ul style={styles.clubs.element}>
                            <li key={2} style={styles.clubs.title}>구독 클럽</li>
                            <ul style={styles.clubs.list}>
                                <li key={13} style={styles.clubs.listElement}>페이커</li>
                                <li key={14} style={styles.clubs.listElement}>임요환</li>
                                <li key={15} style={styles.clubs.listElement}>홍진호</li>
                                <li key={16} style={styles.clubs.listElement}>김슬기</li>
                            </ul>
                        </ul>
                        { auth.token &&
                            <ul style={styles.clubs.element}>
                                <li>{user.email}</li>
                                <li>{user.email}</li>
                                <li>{user.email}</li>
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
        backgroundColor: "#e7efef",
        width: "340px",
        minHeight: 600,
        borderTop: '1px solid #111'
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
            color : '#00A99E',
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