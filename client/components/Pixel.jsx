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

    eventHandler = (colour) => {
        this.setState({
            style: {
                height,
                width,
                background: colour
            }
        })
    }

    render() {
        const { style } = this.state
        return (
            <div role='main' style={style} onClick={() => this.setRandomColour()}
                onMouseEnter={() => this.eventHandler('green')} onContextMenu={() => this.eventHandler('black')}
                onDoubleClick={() => this.eventHandler('white')} onDragEnter={() => this.eventHandler('yellow')}>

            </div>
        )
    }
}

export default Pixel