import React from 'react'

const randomHexColor = () =>
  `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`

class Pixel extends React.Component {
state = {
  height: "100px",
  backgroundColor: randomHexColor(),
  width: "100px"
}
clickHandler = evt => {
  this.setState({
  backgroundColor: randomHexColor()
  })
}
render() {
  return ( 
    <div onClick={this.clickHandler} style={
      this.state
      }>
        <p>i am awesome</p>
        
    </div>
  )
}
} 


export default Pixel