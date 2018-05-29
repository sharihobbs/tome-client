import React from 'react';
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import {SearchForm} from './search-form';

Enzyme.configure({ adapter: new Adapter() });

const initialState = {};

function setup() {
  const middlewares = [thunk]
  const mockStore = configureStore(middlewares)
  const store = mockStore(initialState)

  const props = {
    search: jest.fn(),
    resetState: jest.fn()
  }

  const wrapper = mount(<SearchForm {...props} store={store} />)

  return {
    props,
    wrapper
  }
}

describe('Search Form Component', () => {
  it('should render self and subcomponents', () => {
    const { wrapper } = setup()
    expect(wrapper.find('SearchForm').exists()).toBe(true)

    expect(wrapper.find('[htmlFor="terms"]').text()).toBe('Search for any book by Title, Author, Subject, or ISBN.')

    const searchInputProps = wrapper.find('input.search-input').props()
    expect(searchInputProps.placeholder).toEqual('Paula Hawkins, Cell, parenting, etc.')

    const searchButtonProps = wrapper.find('input.terms-btn').props()
    expect(searchButtonProps.value).toEqual('Search')
  })

  it('should call search if length of text is greater than 0', () => {
    const { wrapper, props } = setup()
    const input = wrapper.find('#searchForm')
    input.props().onSubmit({preventDefault: () => {}})
    expect(props.search.mock.calls.length).toBe(0)
    expect(props.resetState.mock.calls.length).toBe(0)

    wrapper.setState({ query: 'cats' });
    input.props().onSubmit({preventDefault: () => {}})
    expect(props.search.mock.calls.length).toBe(1)
    expect(props.resetState.mock.calls.length).toBe(1)
  })
});
