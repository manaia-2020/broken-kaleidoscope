import React from 'react'

class Pixel extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
      style: {
        width: props.width,
        height: props.height,
        backgroundColor: props.colour
      }
    }
  }

    render () {
        return (
            <div style={this.state.style}>

            </div>
        )
    }
}

export default Pixel