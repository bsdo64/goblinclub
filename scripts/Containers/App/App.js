/**
 * Created by dobyeongsu on 2015. 10. 15..
 */
import React, { Component } from 'react';
import { Link } from 'react-router';
import UserActions from '../../Actions/UserActions';
import fetch from 'superagent';

export default class App extends Component {
    componentWillMount() {
        // Data Init

    }
    componentDidMount() {

    }

    render () {

        const { header, main, sidebar } = this.props.children;

        return (
            <div>
                {header}

                <div>
                    {main}

                    {sidebar}
                </div>
            </div>
        )
    }
}
