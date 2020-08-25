import React from 'react'
import Pixel from './Pixel'

const App = (props) => {
  return (
    <div>
      {Array.from({length: props.length}, (v, i) => <Pixel key={i} width='30px' height='30px' />)}
    </div>
  )
}

export default App
