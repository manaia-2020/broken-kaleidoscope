import React from 'react'
import ReactDOM from 'react-dom'

import App from './components/App'

document.addEventListener('DOMContentLoaded', () => {
  const length = prompt('Enter length: ', 1000)
  const width = prompt('Enter width in pixels: ', 20)
  const height = prompt('Enter height in pixels: ', 20)

  ReactDOM.render(
    <App length={length} width={width} height={height} />,
    document.getElementById('app')
  )
})
