import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import Pixel from './Pixel'

describe('<Pixel />', () => {
  test('check if the colour changes on hover', () => {
    render(<Pixel width='20px' height='20px' />)

    const button = screen.getByRole('button', {hidden: true})

    const previousColour = button.style.backgroundColor
    fireEvent.mouseEnter(button)
    const colour = button.style.backgroundColor

    expect.assertions(2)
    expect(colour).not.toBe(previousColour)
    expect(colour).toContain('white')
  })

  test('check if the colour changes on click', () => {
    render(<Pixel width='20px' height='20px' />)

    const button = screen.getByRole('button', {hidden: true})

    const previousColour = button.style.backgroundColor
    fireEvent.click(button)
    const colour = button.style.backgroundColor

    expect.assertions(1)
    expect(colour).not.toBe(previousColour)
  })
})