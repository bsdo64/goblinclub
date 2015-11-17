/**
 * Created by dobyeongsu on 2015. 11. 14..
 */
import React, { Component } from 'react';
import Radium from 'radium';
import { Link } from 'react-router';

import { editor as styles } from './style_editor'
import connectToStores from 'alt/utils/connectToStores';
import PostActions from '../../../Actions/PostActions';
import PostStore from '../../../stores/PostStore';

@connectToStores
@Radium
export default class editor extends Component {
    static getStores() {
        return [PostStore];
    }

    static getPropsFromStores() {
        return {
            PostStore: PostStore.getState()
        }
    }

    constructor(...props) {
        super(...props);

        this.handleChange = this.handleChange.bind(this);
        this.submit = this.submit.bind(this);
    }

    handleChange() {
        this.setState({value: this.refs.textarea.value});
        PostActions.submitPost(this.refs.textarea.value)
    }

    submit() {
        // PostActions.submitPost(this.state.value)
    }

    render() {
        var value = this.props.PostStore.post;

        return (
            <div style={styles.widget.container4}>
                <div style={styles.widget.container2}>
                    <div style={styles.widget.listObj1}>
                        <input style={styles.widget.textarea1} placeholder="제목입니다" />
                    </div>
                    <div style={styles.widget.listObj}>
                            <textarea
                                onChange={this.handleChange}
                                ref="textarea"
                                style={styles.widget.textarea2}
                                placeholder="여기에 입력하세요."
                                defaultValue={value}
                            />
                    </div>

                    <div>
                        <button onClick={this.submit}>저장하기</button>
                    </div>
                </div>
                <div style={styles.widget.container3}>
                    <div style={styles.widget.listObj}>

                        # H1
                        ## H2
                        ### H3
                        #### H4
                        ##### H5
                        ###### H6

                        *asterisks*
                        **asterisks**

                        > Pardon my french

                        * Item
                        * Item
                        * Item

                        - Item
                        - Item
                        - Item

                        1. Item 1
                        2. Item 2
                        3. Item 3

                        `SuperiorProject`

                        ```
                        x = 0
                        x = 2 + 2
                        what is x
                        ```

                        <p>[Visit GitHub!](https://www.github.com)</p>

                        <p>@[youtube](https://www.youtube.com/watch?v=toaZ7PeTMps)</p>
                        <p>@[twitch](http://www.twitch.tv/nightblue3)</p>
                    </div>
                </div>
            </div>

        )
    }
}

