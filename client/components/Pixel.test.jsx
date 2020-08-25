import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import Pixel from './Pixel'

describe('<Pixel />', () => {
  test('check if the colour changes on click', () => {
    render(<Pixel width='20px' height='20px' />)

    const button = screen.getByRole('button', {hidden: true})

    console.log(button.style.backgroundColor)
    fireEvent.mouseEnter(button)
    console.log(button.style.backgroundColor)

    //how would you assert the style has changed?
  })
})