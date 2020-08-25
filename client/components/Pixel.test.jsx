import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Pixel from './Pixel';

describe('<Pixel />', () => {
  test('check if the colour changes on click', () => {
    render(<Pixel width='20px' height='20px' />);

    const button = screen.getByRole('button', { hidden: true })

    const prevColour = button.style.backgroundColor

    fireEvent.click(button);
    
    const newColour = button.style.backgroundColor

    expect.assertions(1)
    expect(newColour).not.toBe(prevColour)

    //how would you assert the style has changed?
  });

  test('check if colour changes on right click', () =>{
    render(<Pixel width='20px' height='20px' />);

    const button = screen.getByRole('button', { hidden: true });

    const prevColour = button.style.backgroundColor;

    fireEvent.mouseEnter(button)
    
    const newColour = button.style.backgroundColor;

    expect.assertions(1);
    expect(newColour).not.toBe(prevColour);
  })

});
