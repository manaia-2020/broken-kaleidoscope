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

    clickHandler = (event) => {
        this.setRandomColour()
    }

    clickHandlerGreen = (event) => {
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

    componentDidMount = () => {

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


    render() {
        const { style } = this.state
        return (
            <div style={style} onClick={this.clickHandler}
                onMouseEnter={this.clickHandlerGreen} onContextMenu={this.contextHandler}
                onDoubleClick={this.doubleClickHandler} onDragEnter={this.onDragHandler}
                onLoad={this.intervalStart}>

            </div>
        )
    }
}

export default Pixel

// https://stackoverflow.com/questions/41229332/react-uncaught-rangeerror-maximum-call-stack-size-exceeded
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Too_much_recursion