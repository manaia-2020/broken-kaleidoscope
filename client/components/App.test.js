import React from 'react'
import {shallow} from 'enzyme'

import App from './App'

test('<App />', () => {
  const expected = 'Pixel'
  const wrapper = shallow(<App />)
  expect(wrapper.text()).toContain(expected)
})
