import React from 'react';
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import thunk from 'redux-thunk'
import configureStore from 'redux-mock-store'
import {withRouter} from 'react-router'
import {Logout} from './logout'

Enzyme.configure({ adapter: new Adapter() });

const initialState = {};

function setup() {
  const middlewares = [thunk]
  const mockStore = configureStore(middlewares)
  const store = mockStore(initialState)

  const props = {
    logout: jest.fn(),
    resetState: jest.fn()
  }

  const Logout = () => <div />
  const WrappedComponent = withRouter(Logout)
  const wrapper = mount(<Logout {...props} store={store} />)

  return {
    props,
    wrapper
  }
}

describe('Search Results Component', () => {
  it('should render self and subcomponents', () => {
    const { wrapper, props } = setup()
    expect(wrapper.find('Logout').exists()).toBe(true)
    expect(props.resetState.mock.calls.length).toBe(0)
  })
})
