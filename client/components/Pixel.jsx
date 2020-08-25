import React, {Component} from "react"

const randomHexColor = () =>
    `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`

class Pixel extends Component {
    constructor(props) {
        super(props)
            
        this.state = {
            style : {
                height: '200px',
                width: '200px',
                backgroundColor: randomHexColor()
            }
        }
    }
    clickHandler = e => {
        this.setState({
          style: {
            height: '200px',
            width: '200px',
            backgroundColor: randomHexColor()
          }
        })
      }
      onHoverHandler = e => {
        this.setState({
          style: {
            height: '200px',
            width: '200px',
            backgroundColor: 'green'
          }
        })
    }
      onRightClickHandler = e => {
        e.preventDefault()
        this.setState({
          style: {
            height: '200px',
            width: '200px',
            backgroundColor: 'black'
          }
        })
      }
        render() {
           return(
                <div style={this.state.style} 
                onClick={(e) => this.clickHandler(e)}
                onMouseEnter={(e) => this.onHoverHandler(e)}
                onContextMenu={(e) => this.onRightClickHandler(e)}
                />
                
           )
        }
}

export default Pixel
