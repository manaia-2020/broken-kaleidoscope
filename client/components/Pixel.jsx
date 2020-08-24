import React from 'react'

const randomHexColor = () =>
  `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`

class Pixel extends React.Component {

  state = {
        width: this.props.width,
        height: this.props.height,
        backgroundColor: randomHexColor()
  }

  changeColor = event => {
      this.setState ({
          backgroundColor: randomHexColor()
      })
  }

    render () {
        const {width, height, backgroundColor} = this.state
        const style = {width, height, backgroundColor}
        return (
            <div style={style} onClick={this.changeColor}>
            </div>
        )
    }
}

export default Pixel