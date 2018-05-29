import React from 'react';
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import {LoginForm} from './login';

Enzyme.configure({ adapter: new Adapter() });

function setup() {
  const middlewares = [thunk]
  const mockStore = configureStore(middlewares)
  const store = mockStore(initialState)

  const props = {
    login: jest.fn(),
    isLoggedIn: jest.fn()
  }

  const wrapper = mount(<LoginForm {...props} store={store} />)

  return {
    props,
    wrapper
  }
}

const initialState = {};

describe('Login Form Component', () => {
  it('should render self and subcomponents', () => {
    const { wrapper } = setup()
    expect(wrapper.find('LoginForm').exists()).toBe(true)

    const emailInputProps = wrapper.find('input.email').props()
    expect(emailInputProps.placeholder).toEqual('amanda@gmail.com')

    const passwordInputProps = wrapper.find('input.password').props()
    expect(passwordInputProps.placeholder).toEqual('i<3toreadbo0ks')

    const loginButtonProps = wrapper.find('input.login-btn').props()
    expect(loginButtonProps.value).toEqual('Login')
  })

  it('should login user', () => {
    const { wrapper, props } = setup()
    const loginForm = wrapper.find('#loginForm')

    wrapper.setState({ email: 'foo', password: 'bar' });
    expect(wrapper.state('email')).toBe('foo')
    expect(wrapper.state('password')).toBe('bar')
    expect(wrapper.state('fromPath')).toBe('/readinglist')

    loginForm.props().onSubmit({preventDefault: () => {}})
    expect(props.login.mock.calls.length).toBe(1)
    expect(props.isLoggedIn.mock.calls.length).toBe(1)
    expect(wrapper.state('email')).toBe('')
    expect(wrapper.state('password')).toBe('')
    expect(wrapper.state('fromPath')).toBe('/readinglist')
  })
});
