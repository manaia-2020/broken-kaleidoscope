import React, {Component} from "react"

const randomHexColor = () =>
    `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`

class Pixel extends Component {
    constructor(props) {
        super(props)
<<<<<<< HEAD
=======
           const randomHexColor = () =>
              `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`
>>>>>>> b56f618f423de77bc12dca5f212b75875f1e5801
            
        this.state = {
            style : {
                height: '200px',
                width: '200px',
                backgroundColor: randomHexColor()
            }
        }
    }
    clickHandler = evt => {
        this.setState({
          style: {
            height: '200px',
            width: '200px',
            backgroundColor: randomHexColor()
          }
        })
      }
        render() {
           return(
                <div style={this.state.style} 
                onClick={() => this.clickHandler()}/>
                
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