/*
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

image sources:
*/

import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import './index.css';
import { Yellow, Pink, Red, Uterus, Purple, Semicircle } from './board/board.js';

class Header extends React.Component {
  render () {
    var circleStyle = {
      padding: 0, // size
      position: 'relative',
      // margin: '50%', // jarak layar ke bola
      // backgroundColor: this.state.bgColor, // this.props.bgColor
      // borderRadius: '50%',
      width: 500,
      height: 500,
      margin: 'auto'
    };
    return (
      <div >
        <div style={circleStyle}>
          <Yellow />
          <Pink />
          <Red />
          <Purple/>
          <Uterus />
        </div>
        <Semicircle />
        Icons from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
      </div>
    );
  }
}

ReactDOM.render(<Header />, document.getElementById('root'));
serviceWorker.unregister();
