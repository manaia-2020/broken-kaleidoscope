import React from 'react'
import Pixel from './Pixel'
const newPixel = Array.from({length:5000},(v,i) => <Pixel />)
const App = () => {
  return (
    <>
    {newPixel}
    </>
  )
}

export default App
