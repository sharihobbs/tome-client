import React from 'react';
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import {ReadingList} from './reading-list';

Enzyme.configure({ adapter: new Adapter() });

const initialState = {};

function setup() {
  const middlewares = [thunk]
  const mockStore = configureStore(middlewares)
  const store = mockStore(initialState)

  const props = {
    readingBooks: [{
      id: 1111,
      thumbnail: 'https://books.google.com/books/content?id=99Uo01-ptl4C&printsec=frontcover&img=1&zoom=5&edge=curl&imgtk=AFLRE70iEdSDG5MbRu4RjdgY7fUI2cqvcq1Lgck5A5QzHhrYkP4QUDo7PUSdnPGOD1AHCLngSTIdRdNEpicf5tfx23E_X7S6nW0UscR4Qt6dkrvl-KkkzQsenIdwY9vCPkbrMOyShJMk',
      title: 'Rilke\'s Book of Hours: Love Poems to God',
      author: 'Anita Barrows',
      isbn: 9781440628320,
      note: 'note',
      googleId: 'googleId'
    }],
    fetchReadingList: jest.fn(),
    deleteBook: jest.fn()
  }

  const wrapper = mount(<ReadingList {...props} store={store} />)

  return {
    props,
    wrapper
  }
}

describe('Reading List Component', () => {
  it('should render self and subcomponents', () => {
    const { wrapper, props } = setup()
    expect(wrapper.find('ReadingList').exists()).toBe(true)
    expect(props.fetchReadingList.mock.calls.length).toBe(1)
  })
});
