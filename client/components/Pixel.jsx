import React from 'react'

const randomHexColor = () => `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`

class Pixel extends React.Component{
   
    state = {
        height: '50px',
        width: '50px',
        backgroundColor: randomHexColor()
    }

    clickHandler = evt => {
        this.setState({
         backgroundColor: randomHexColor()
        })
      }

    mouseEnterHandler = evt =>{
        this.setState({
            backgroundColor:"green"
        })
    }

    onMouseOut = evt =>{
        this.setState({
            backgroundColor: randomHexColor()
        })
    }

    rainbowPixel = () =>{
        this.setState({
            backgroundColor: randomHexColor()
        })
    }

    render(){
        return(
            <div style={this.state}onClick={this.clickHandler} onMouseEnter={this.mouseEnterHandler} onMouseOut={this.onMouseOut}>   
            </div>
        )
    }
}




export default Pixel