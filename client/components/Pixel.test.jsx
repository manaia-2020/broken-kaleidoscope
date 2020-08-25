import React from 'react';
import {render, fireEvent, screen } from '@testing-library/react'
import Pixel from './Pixel.jsx'

describe('Test Pixel Component', () => {
    test('Check test setup working', () => {
        expect(true).toBeTruthy()
    })

    test('Check height of pixel', () => {
       render(<Pixel />)

        let div = screen.getByRole('main')
        let expected = div.getAttribute('style')
        expect(expected).toContain('height: 40')
    })

    test('contextHandler changes pixel colour to black', () => {
        render(<Pixel />)

        let div = screen.getByRole('main')

        fireEvent.contextMenu(div)

        let expected = screen.getByRole('main').getAttribute('style')
        expect(expected).toContain('background: black')
    })
})
