import React from 'react';
import uterus from './images/uterus.png';

class Uterus extends React.Component {
  render () {
    var uterusStyle = {
      position: 'absolute',
      margin: 'auto',
      width: '20%',
      height: '20%',
      left: '40%',
      top: '40%'
    };
    return (
      <img src={uterus} style={uterusStyle}></img>
    );
  }
}
class Purple extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      bgColor: 'purple'
    };
    this.handleEvent = this.handleEvent.bind(this);
  }

  handleEvent () {
    // this.setState({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY });
    if (this.state.bgColor === 'purple') {
      this.setState({ bgColor: 'orange' });
    } else {
      this.setState({ bgColor: 'purple' });
    }
  }

  render () {
    var circleStyle = {
      padding: 0, // size
      position: 'absolute',
      margin: 'auto', // jarak layar ke bola
      backgroundColor: this.state.bgColor, // '#FF0000', // this.props.bgColor
      borderRadius: '50%',
      width: '40%',
      height: '40%',
      left: '30%',
      top: '30%'
    };
    return (
      <div onMouseDown={this.handleEvent} style={circleStyle}>
      </div>
    );
  }
}
class Red extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      bgColor: 'red'
    };
    this.handleEvent = this.handleEvent.bind(this);
  }

  handleEvent () {
    // this.setState({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY });
    if (this.state.bgColor === 'red') {
      this.setState({ bgColor: 'white' });
    } else {
      this.setState({ bgColor: 'red' });
    }
  }

  render () {
    var circleStyle = {
      padding: 0, // size
      position: 'absolute',
      margin: 'auto', // jarak layar ke bola
      backgroundColor: this.state.bgColor, // '#FF0000', // this.props.bgColor
      borderRadius: '50%',
      width: '60%',
      height: '60%',
      left: '20%',
      top: '20%'
    };
    return (
      <div onMouseDown={this.handleEvent} style={circleStyle}>
      </div>
    );
  }
}
class Pink extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      bgColor: 'pink'
    };
    this.handleEvent = this.handleEvent.bind(this);
  }

  handleEvent () {
    // this.setState({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY });
    if (this.state.bgColor === 'pink') {
      this.setState({ bgColor: 'blue' });
    } else {
      this.setState({ bgColor: 'pink' });
    }
  }

  render () {
    var circleStyle = {
      padding: 0, // size
      position: 'absolute',
      margin: '0 auto', // jarak layar ke bola
      backgroundColor: this.state.bgColor, // #FFFF00this.props.bgColor
      borderRadius: '50%',
      width: '80%',
      height: '80%',
      left: '10%',
      top: '10%'
    };
    return (
      <div onMouseDown={this.handleEvent} style={circleStyle}>

        {/* <Red /> */}
      </div>
    );
  }
}

class Yellow extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      bgColor: 'yellow'
    };
    this.handleEvent = this.handleEvent.bind(this);
  }

  handleEvent () {
    // this.setState({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY });
    if (this.state.bgColor === 'yellow') {
      this.setState({ bgColor: 'black' });
    } else {
      this.setState({ bgColor: 'yellow' });
    }
  }

  render () {
    var circleStyle = {
      padding: 0, // size
      position: 'relative',
      // margin: '50%', // jarak layar ke bola
      backgroundColor: this.state.bgColor, // this.props.bgColor
      borderRadius: '50%',
      width: 500,
      height: 500
    };
    return (

      <div onMouseDown={this.handleEvent} style={circleStyle} >
        {/* <Pink /> */}
      </div>
    );
  }
}

class Semicircle extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      bgColor: 'yellow'
    };
    this.handleEvent = this.handleEvent.bind(this);
  }

  handleEvent () {
    // this.setState({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY });
    if (this.state.bgColor === 'yellow') {
      this.setState({ bgColor: 'black' });
    } else {
      this.setState({ bgColor: 'yellow' });
    }
  }

  render () {
    var circleStyle = {
      height: 500,
      width: 500 * 2,
      margin: '0 1em 1em 0'
    };
    return (

      <div onMouseDown={this.handleEvent} style={circleStyle} >
        {/* <Pink /> */}
      </div>
    );
  }
}

export { Yellow, Pink, Red, Purple, Uterus, Semicircle };
