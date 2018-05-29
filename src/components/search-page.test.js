import React from 'react';
import {shallow} from 'enzyme';

import SearchPage from './search-page';

describe('<SearchPage />', () => {
  it('Renders without crashing', () => {
      shallow(<SearchPage />);
  });
});
