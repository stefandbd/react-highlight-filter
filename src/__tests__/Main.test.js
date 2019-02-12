import React from 'react'
import Adapter from 'enzyme-adapter-react-16'
import { shallow, configure, mount } from 'enzyme'
import Main from '../components/Main'

configure({ adapter: new Adapter() });

describe('<Main />', () => {
  it('mounts', () => {
    const props = {
      selectedText: '',
      filterColors: jest.fn(),
      selectedTexts: jest.fn()
    }
    const wrapper = shallow(<Main {...props} />)
    expect(wrapper.length).toEqual(1)
  })

})