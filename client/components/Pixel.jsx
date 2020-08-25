import React from 'react';
const randomHexColor = () =>
  `#${Math.floor(Math.random() * 0x1000000)
    .toString(16)
    .padStart(6, 0)}`;
class Pixel extends React.Component {
  randomHexColor = () =>
    `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`

  state = {
    width: this.props.width,
    height: this.props.height,
    backgroundColor: randomHexColor(),
  };

  changeColor = (event) => {
    this.setState({
      backgroundColor: randomHexColor(),
    });
  };

  makeGreen = (event) => {
    this.setState({
      backgroundColor: 'green'

    })

  }
  render() {
    const style = { width: 50, height: 50, backgroundColor: this.state.backgroundColor };
    return <div onClick={this.changeColor} style={style} onMouseEnter={this.makeGreen}></div>
  }
}

export default Pixel;
