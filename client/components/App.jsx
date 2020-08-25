import React from 'react'
import Pixel from './Pixel'

const pixels = []
for (let i = 0; i < 100; i++) {
  pixels.push(<Pixel key={i} />)
}

const App = () => {
  return <div>{pixels}</div>
}

export default App

//https://reactjs.org/blog/2015/09/02/new-react-developer-tools.html#installation
//https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi



