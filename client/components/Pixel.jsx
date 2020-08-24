import React, {Component} from "react"



class Pixel extends Component {
    constructor(props) {
        super(props)

        this.state = {
            style : {
                height: '200px',
                width: '200px',
                backgroundColor: 'blue'
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