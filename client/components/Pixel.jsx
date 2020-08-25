import React from 'react'

const width = 40
const height = width
const randomColour = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`

class Pixel extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            style: {
                height,
                width,
                background: randomColour()
            }
        }
        setInterval(this.setRandomColour, 2000)
    }

    setRandomColour = () => {
        this.setState({
            style: {
                height,
                width,
                background: randomColour()
            }
        })
    }

    clickHandler = (event) => {
        this.setRandomColour()
    }

    mouseEnterHandler = (event) => {
        this.setState({
            style: {
                height,
                width,
                background: 'green'
            }
        })
    }

    contextHandler = (event) => {
        event.preventDefault()
        this.setState({
            style: {
                height,
                width,
                background: 'black'
            }
        })
    }

    doubleClickHandler = event => {
        this.setState({
            style: {
                height,
                width,
                background: 'white'
            }
        })
    }

    onDragHandler = event => {
        this.setState({
            style: {
                height,
                width,
                background: 'yellow'
            }
        })
    }

    render() {
        const { style } = this.state
        return (
            <div role='main' style={style} onClick={this.clickHandler}
                onMouseEnter={this.mouseEnterHandler} onContextMenu={this.contextHandler}
                onDoubleClick={this.doubleClickHandler} onDragEnter={this.onDragHandler}>

            </div>
        )
    }
}

export default Pixel