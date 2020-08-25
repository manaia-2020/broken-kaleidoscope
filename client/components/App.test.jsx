import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'

describe('<App />', () => {
  test('printing x amount of pixels', () => {
    const expected = 1000
    render(<App length={expected} />)

    const buttons = screen.getAllByRole('button', {hidden: true})

    expect.assertions(1)
    expect(buttons.length).toBe(expected)
  })
})