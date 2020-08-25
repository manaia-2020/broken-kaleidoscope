import React from "react";

const randomHexColor = () =>
  `#${Math.floor(Math.random() * 0x1000000)
    .toString(16)
    .padStart(6, 0)}`;

class Pixel extends React.Component {
  state = {
    height: "100px",
    width: "100px",
    backgroundColor: randomHexColor()
  };

  clickHandler = (evt) => {
    this.setState({
      backgroundColor: randomHexColor(),
    });
  };

  mouseEnterHandler = (evt) => {
    this.setState({
      backgroundColor: "green",
    });
  };

  onMouseOut = (evt) => {
    this.setState({
      backgroundColor: randomHexColor(),
    });
  };

  rightClickHandler = (evt) => {
    evt.preventDefault()
    this.setState({
      backgroundColor: "black",
    });
  };

  doubleClickHandler = (evt) =>{
    this.setState({
        backgroundColor: "white",
    });
  }

  dragEnterHandler = (evt) =>{
    this.setState({
        backgroundColor: "yellow",
    });
  }

  changeColor = (evt) =>{
      this.setState({
        backgroundColor: randomHexColor()
      })
  }
  componentDidMount() {
    setInterval(() => {
      this.changeColor()
    }, 13);
  }
  
  render() {
    return (
      <div 
        style={this.state}
        onClick={this.clickHandler}
        onContextMenu={this.rightClickHandler}
        onMouseEnter={this.mouseEnterHandler}
        onMouseOut={this.onMouseOut}
        onDoubleClick={this.doubleClickHandler}
        onDragEnter = {this.dragEnterHandler}
      ></div>
    );
  }
}

export default Pixel;
