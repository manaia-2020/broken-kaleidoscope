import React from 'react'

const randomColour = () => `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`

class Pixel extends React.Component {

    state = {
        height: '30px',
        width: '30px',
        backgroundColor: randomColour(),
    }
    
    componentDidMount () {
        setInterval(() => {
            this.setState({        
                backgroundColor: randomColour()
            })
        }, 100);
    }

    clickHandler = (event) => {
        this.setState({        
            backgroundColor: randomColour()
        })
    }

    mouseOverHandler = (event) => {
        this.setState({
            backgroundColor: "black"
        })
    }

    render() {
        return (
            <div style={{
                height: this.state.height,
                width: this.state.width,
                backgroundColor: this.state.backgroundColor,
            }}
            onClick={() => this.clickHandler()}
            onMouseOver={() => this.mouseOverHandler()}>
            </div>
        )
    }
}


export default Pixel

// https://github.com/manaia-2020/broken-kaleidoscope/blob/solution/client/components/Pixel.jsx


// clickHandler = evt => {
//     this.setState({
//       backgroundColor: randomColour()
//     })
//   }