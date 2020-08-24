import React from 'react';

class Pixel extends React.Component {
  state = {
    style: { height: 200, width: 200, backgroundColor: 'cornflowerblue' },
  };

  render() {
    return <div style={this.state.style}></div>;
  }
}

export default Pixel;
