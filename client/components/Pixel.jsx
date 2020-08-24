import React from 'react'

class Pixel extends React.Component {

    state = {
        height: '50px',
        width: '50px',
        backgroundColor: 'red',
    }

    render() {
        return (
            <div style={{
                height: this.state.height,
                width: this.state.width,
                backgroundColor: this.state.backgroundColor,
            }}>
            </div>
        )
    }
}

export default Pixel

//https://github.com/manaia-2020/broken-kaleidoscope/blob/solution/client/components/Pixel.jsx



