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

    test('onContextMenu changes pixel colour to black', () => {
        render(<Pixel />)

        let div = screen.getByRole('main')

        fireEvent.contextMenu(div)

        let expected = screen.getByRole('main').getAttribute('style')
        expect(expected).toContain('background: black')
    })

    test('onMouseEnter changes pixel colour to green', () => {
        render(<Pixel />)

        let div = screen.getByRole('main')

        fireEvent.mouseEnter(div)

        let expected = screen.getByRole('main').getAttribute('style')
        expect(expected).toContain('background: green')
    })

    test('onDoubleClick changes pixel colour to white', () => {
        render(<Pixel />)

        let div = screen.getByRole('main')

        fireEvent.doubleClick(div)

        let expected = screen.getByRole('main').getAttribute('style')
        expect(expected).toContain('background: white')
    })

    test('onDragEnter changes pixel colour to yellow', () => {
        render(<Pixel />)

        let div = screen.getByRole('main')

        fireEvent.dragEnter(div)

        let expected = screen.getByRole('main').getAttribute('style')
        expect(expected).toContain('background: yellow')
    })

    test('onClick changes pixel colour', () => {
        render(<Pixel />)

        let div = screen.getByRole('main')

        let divDOM = div.getAttribute('style')

        let index = divDOM.indexOf('rgb')
        let actual = divDOM.substring(index)

        fireEvent.click(div)

        let div2DOM = div.getAttribute('style')
        let expected = div2DOM.substring(index)

        expect(actual).not.toMatch(expected)
    })
})
