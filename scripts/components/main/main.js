/**
 * Created by dobyeongsu on 2015. 10. 15..
 */
import React, { Component } from 'react';
import Radium from 'radium';

@Radium
export default class Main extends Component {
    render() {
        return (
            <div style={styles.base}>
                main
                <div className="container">Container</div>
            </div>
        )
    }
}

var styles = {
    base : {
        position: "relative",
        height: "calc(100% - 50px)",
        overflow: "hidden",
        marginTop: "50px",
        marginLeft: "240px",
        marginRight: "340px",
        boxSizing: "border-box",
        backgroundColor: "#aaa"
    }
};