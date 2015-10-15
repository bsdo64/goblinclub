/**
 * Created by dobyeongsu on 2015. 10. 15..
 */
import React, { Component } from 'react';

export default class Inbox extends Component {
    constructor () {
        super();
        this.state = {secondsElapsed: 0};
    }
    tick () {
        this.setState({secondsElapsed: this.state.secondsElapsed + 1});
    }
    componentDidMount () {
        this.interval = setInterval(this.tick.bind(this), 1000);
    }
    componentWillUnmount () {
        clearInterval(this.interval);
    }
    render () {
        return (
            <div>Seconds Elapsed: {this.state.secondsElapsed}</div>
        );
    }
}
