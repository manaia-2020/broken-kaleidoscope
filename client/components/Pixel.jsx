import React from 'react'

const randomHexColor = () =>
  `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`

class Pixel extends React.Component {
state = {
  height: "90px",
  backgroundColor: randomHexColor(),
  width: "90px",
  backgroundImage: ""
}



clickHandler = () => {
  console.log("Im working!")
  this.setState({
  backgroundImage: '',
  backgroundColor: randomHexColor()
  })
}
hoverHandler = () => {
  this.setState({
    backgroundImage: 'url("./ferby.jpg")'
    
  })
}
render() {
  return ( 
    <div onMouseOver={this.hoverHandler} onClick={this.clickHandler} style={
      this.state
      }>
        
        
    </div>
  )
}
} 


export default Pixel