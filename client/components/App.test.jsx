import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('<App/>', () => {
  test('Printin correct amount of pixels', () =>{
    const expected = 5000

    render(<App length={expected}/>)

    const result = screen.getAllByRole('button', {hidden: true})

    expect.assertions(1)

    expect(result.length).toBe(expected)
  })
})