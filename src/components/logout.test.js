import React from 'react';
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import {Logout} from './logout'

Enzyme.configure({ adapter: new Adapter() });

function setup() {
  const props = {
    logout: jest.fn(),
    resetState: jest.fn()
  }

  const wrapper = shallow(<Logout {...props} />)

  return {
    props,
    wrapper
  }
}

describe('Search Results Component', () => {
  it('should render self and subcomponents', () => {
    const { wrapper, props } = setup()
    expect(wrapper.find('Redirect').exists()).toBe(true)
    expect(props.logout.mock.calls.length).toBe(1)
    expect(props.resetState.mock.calls.length).toBe(1)
  })
})
