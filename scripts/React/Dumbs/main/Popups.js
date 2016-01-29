/**
 * Created by dobyeongsu on 2016. 1. 29..
 */
import React from 'react';
import OnClickOutside from 'react-onclickoutside';

const Popups = React.createClass({
  displayName: 'Popups',
  mixins: [OnClickOutside],
  getInitialState: function () {
    return {popups: []};
  },
  componentDidMount: function () {
    if (this.props.clickButtons) {
      document.addEventListener('click', this.spawnLinkedDiv);
    }
    if (this.props.event) {
      document.addEventListener(this.props.event, this.spawnLinkedDiv);
    }
  },
  componentWillUnmount: function () {
    if (this.props.clickButtons) {
      document.removeEventListener('click', this.spawnLinkedDiv);
    }
    if (this.props.event) {
      document.removeEventListener(this.props.event, this.spawnLinkedDiv);
    }
  },
  handleClickOutside: function (e) {
    this.setState({popups: []});
  },
  handleClickInside: function (e) {
    let t = e.target;
    while (t) {
      if (t.dataset && t.dataset.popupkey) {
        let popupkey = t.dataset.popupkey;
        let popups = this.state.popups;
        let ind = -1;
        popups.map(function (x, i) {
          //TODO get popupkey instead of key
          if (x.key == popupkey)
            ind = i
        });
        this.setState({popups: popups.slice(0, ind + 1)});
        return;
      }
      t = t.parentNode;
    }
  },
  spawnLinkedDiv: function (e) {
    this.handleClickInside(e);

    let data = e.target.attributes[this.props.dataName || 'data'];
    if (!data) {
      return;
    }

    if (this.props.clickButtons) {
      if (this.props.clickButtons.indexOf(e.button) > -1) {
        e.preventDefault();
      } else {
        return;
      }
    } else {
      e.preventDefault();
    }

    let popups = this.state.popups;
    let dataWidth = e.target.attributes['data-width'];
    let dataHeight = e.target.attributes['data-height'];

    let width = dataWidth ?
      parseInt(dataWidth.nodeValue, 10) : 0.5 * window.innerWidth;
    let height = dataHeight ?
      parseInt(dataHeight.nodeValue, 10) : 0.5 * window.innerHeight;

    let limitWidth = window.innerWidth - width;
    let limitHeight = window.innerHeight - height;

    let x = e.pageX;
    let y = e.pageY;

    console.log(e);

    let translateXY = '(-100%, 0%)';
    if (x < limitWidth && y < limitHeight) {
      translateXY = '(0%, 0%)';
    } else if (x < limitWidth && y > limitHeight) {
      translateXY = '(0%, -100%)';
    } else if (x > limitWidth && y > limitHeight) {
      translateXY = '(-100%, -100%)';
    }

    width = dataWidth ? parseInt(dataWidth.nodeValue, 10) : undefined;
    height = dataHeight ? parseInt(dataHeight.nodeValue, 10) : undefined;

    let s = {
      position: 'fixed',
      left: e.pageX,
      top: e.pageY,
      transform: 'translate' + translateXY
    };
    let id = Math.random();
    popups.push(
      <div data-popupkey={id} key={id} style={s}>
        <this.props.handler data={data.nodeValue}
                            width={width}
                            height={height}
                            popupProps={this.props.popupProps} />
      </div>
    );
    this.setState({popups: popups});
  },
  render: function () {
    return (<div>{this.state.popups}</div>);
  }
});

export default Popups;
