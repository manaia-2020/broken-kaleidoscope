import React from 'react';

class Pixel extends React.Component {
  randomHexColor = () =>
    `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`

  state = {
    style: { height: 200, width: 200, backgroundColor: this.randomHexColor() },
  };

  render() {
    return <div style={this.state.style}></div>;
  }
}

export default Pixel;
