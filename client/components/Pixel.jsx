import React from 'react'

const randomColour = () => `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`

class Pixel extends React.Component {

    state = {
        height: '50px',
        width: '50px',
        backgroundColor: randomColour(),
    }

    clickHandler = (event) => {
        this.setState({        
            backgroundColor: randomColour()
        })
    }

    render() {
        return (
            <div style={{
                height: this.state.height,
                width: this.state.width,
                backgroundColor: this.state.backgroundColor,
            }}
            onMouseOver={() => this.clickHandler()}>
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