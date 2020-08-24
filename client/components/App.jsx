import React from 'react'
import Pixel from './Pixel'

const App = () => {
  return (
    <div>
      {Array.from({length: 1000}, (v, i) => <Pixel key={i} width='30px' height='30px' />)}
    </div>
  )
}

export default App
