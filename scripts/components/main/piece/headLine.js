/**
 * Created by dobyeongsu on 2015. 11. 10..
 */
import React, { Component } from 'react';
import Radium, { Style } from 'radium';

@Radium
export default class HeadLine extends Component {
    render() {
        return(
            <div style={styles.headLine.container}>
                <div style={styles.headLine.menu} >
                            <span  className="on">
                                <a style={styles.headLine.menuItem} href="#" >최신순</a>
                            </span>
                    <span>|</span>
                            <span  className="">
                                <a style={styles.headLine.menuItem} href="#" >인기순</a>
                            </span>
                </div>
                <h2 style={styles.headLine.title}>오늘의 베스트</h2>
            </div>
        )
    }
}

var styles = {
    headLine : {
        container: {
            background: "#2b5f5b",
            height: 26
        },
        menu : {
            float: 'right',
            padding: '2px 15px 0 0'
        },
        menuItem: {
            color: '#fff',
            margin: '0 5px',
            fontSize: 12
        },
        title: {
            margin: 0,
            padding: '5px 0 0 15px',
            fontSize: 15,
            color: '#fff'
        }
    }
}