import React from 'react';
import {shallow} from 'enzyme';

import Instructions from './instructions';

describe('<Instructions />', () => {
  it('Renders without crashing', () => {
      shallow(<Instructions />);
  });
});
