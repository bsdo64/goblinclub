/**
 * Created by dobyeongsu on 2015. 10. 15..
 */
import React, { Component } from 'react';
import Radium from 'radium';

@Radium
export default class sidebar extends Component {
    render() {
        return (
            <div style={styles.base}>
                sidebar
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