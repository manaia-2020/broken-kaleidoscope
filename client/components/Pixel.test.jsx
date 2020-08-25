import React from 'react'
import {render, screen, fireEvent} from '@testing-library/react'

import Pixel from './Pixel'

describe('Pixel', () =>{


    test('testing if the colors change with left click', () =>{
        render(<Pixel />)
        let colorChange = screen.getByRole('button')
        let originalColor = colorChange.style.backgroundColor 
        // console.log(colorChange)
        fireEvent.click(colorChange)
        
        
        let newColor =colorChange.style.backgroundColor
        expect(originalColor).not.toEqual(newColor)
    })
})