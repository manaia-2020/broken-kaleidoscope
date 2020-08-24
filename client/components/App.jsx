import React from 'react'
import Pixel from './Pixel'

const App = () => {
  return (
    <div>
      {Array.from({length: 100000}, (v, i) => <Pixel key={i} width='3px' height='3px' />)}
    </div>
  )
}

export default App
