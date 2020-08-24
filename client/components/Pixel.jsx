import React, {Component} from "react"



class Pixel extends Component {
    constructor(props) {
        super(props)
           const randomHexColor = () =>
              `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`
            
        this.state = {
            style : {
                height: '200px',
                width: '200px',
                backgroundColor: randomHexColor()
            }
        }
    }
        render() {
           return(
                <div style={this.state.style}>
                </div>
           )
        }
}

    

// const Pixel = () =>{
//     return (
//     <div style={{
//       height: '200px',
//       width: '200px',
//       backgroundColor: "blue"
//     }}>

//     </div>
//     )
// }

export default Pixel