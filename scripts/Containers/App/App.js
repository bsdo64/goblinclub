/**
 * Created by dobyeongsu on 2015. 10. 15..
 */
import React, { Component } from 'react';
import { Link } from 'react-router';
import Radium, { Style } from 'radium';
import UserActions from '../../Actions/UserActions';
import fetch from 'superagent';

@Radium
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
                <Style
                    rules={{
                        a: {
                            color: '#2b5f5b',
                            textDecoration: 'none',
                            cursor: 'pointer'
                        },
                        pre: {
                            backgroundColor: 'rgba(255, 255, 255, 0)',
                            border: 'none',
                            borderRadius: 0
                        }
                    }}
                />
                {header}

                <div>
                    {main}

                    {sidebar}
                </div>
            </div>
        )
    }
}
