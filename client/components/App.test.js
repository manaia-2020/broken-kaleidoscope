import React from 'react'
import {shallow} from 'enzyme'
import Pixel from 
import App from './App'

test('<App />', () => {
  const expected = 'React development has begun!'
  const wrapper = shallow(<App />)
  expect(wrapper.text()).toBe(expected)
})
