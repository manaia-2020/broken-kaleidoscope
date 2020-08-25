import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import Pixel from './Pixel'

describe('<Pixel />', () => {
  test('check if the colour changes on click', () => {
    render(<Pixel width='20px' height='20px' />)

    const button = screen.getAllByRole('button', {hidden: true})


  })
})