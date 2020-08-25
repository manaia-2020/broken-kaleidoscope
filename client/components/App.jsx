import React from 'react'

import Pixel from './Pixel'

const pixels = []
for (let i = 0; i < 1000; i++) {
  pixels.push(<Pixel key={i} />)
}

const App = () => {
  return <div>{pixels}</div>
}

export default App
