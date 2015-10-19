/**
 * Created by dobyeongsu on 2015. 10. 15..
 */
import React, { Component } from 'react';
import { Link } from 'react-router';
import UserActions from '../../Actions/UserActions';
import Cookie from 'cookie';

export default class App extends Component {

    componentDidMount() {
        var cookie = Cookie.parse(document.cookie);

        if(cookie) {
            console.log(cookie);
            UserActions.isLogined(cookie.token);
        } else {
            console.log(document.cookie);
        }
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
