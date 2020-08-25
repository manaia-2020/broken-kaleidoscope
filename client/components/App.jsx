import React from 'react'
import Pixel from './Pixel'

const App = () => {
  return (
    Array.from({length: 1000}, (v, i) => <Pixel/>)
  )
}

export default App
