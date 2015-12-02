/**
 * Created by dobyeongsu on 2015. 10. 15..
 */
import React, { Component } from 'react';
import Radium from 'radium';
import PostStore from '../../Stores/PostStore'

import { HeadLine } from '../../Components/index';

class Main extends Component {

    componentDidMount () {
        $('.nano').nanoScroller();
        $('.nano-content').scrollTop(0)
    }

    componentWillMount() {

    }

    render() {

        return (
            <div style={styles.main}>

                <div id="bestPosts" style={styles.mainBox}>
                    <HeadLine ClubStore={{club: 'name'}} />

                    <div className="nano" style={styles.contents}>
                        <div className="nano-content" style={styles.scrollContent}>
                            {this.props.mainSection}
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}
export default Main = Radium(Main);

var styles = {
    main : {
        position: "relative",
        overflow: "hidden",
        marginTop: "50px",
        marginLeft: "240px",
        marginRight: "340px",
        boxSizing: "border-box",
        backgroundColor: "#aaa",
        height: "100%",
        minHeight: 600,
        minWidth: 565,
        borderTop: '1px solid #111',
        borderLeft: '1px solid #111',
        borderRight: '1px solid #111',
        borderBottom: 'none'
    },
    mainBox: {
        background: "#f4f4f4",
        height: "100%",
        overflow: "hidden"
    },
    contents : {
        height: "calc(100vh - 78px)"
    },
    scrollContent: {
        right: 0,
        width: "auto",
        height: "auto",
        overflow: "hidden",
        overflowY: "scroll",
        bottom: 0,
        left: 0,
        top: 0
    }
};