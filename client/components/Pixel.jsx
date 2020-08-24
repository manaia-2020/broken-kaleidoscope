import React from 'react'

class Pixel extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            style: {
                height: '40px',
                width: '40px',
                background: this.randomHexColor()
            }
        }
    }

    clickHandler = (event) => {
        this.setState({
            style: {
                height: '40px',
                width: '40px',
                background: this.randomHexColor()
            }
        })
    }

    clickHandlerGreen = (event) => {
        this.setState ({
            style: {
                height: '40px',
                width: '40px',
                background: 'green'
            }
        })
    }

    randomHexColor = () => {
        return `#${Math.floor(Math.random() * 0x1000000)
            .toString(16).padStart(6, 0)}`
    }

    render() {
        return (
            <div style={this.state.style} onClick={this.clickHandler} onMouseEnter={this.clickHandlerGreen}>

            </div>
        )
    }
}

export default Pixel