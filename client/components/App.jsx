import React from 'react'
import Pixel from './Pixel'

const App = (props) => {
  const width = props.width + 'px'
  const height = props.height + 'px'

  return (
    <div>
      {Array.from({length: props.length}, (v, i) => <Pixel key={i} width={width} height={height} />)}
    </div>
  )
}

export default App
