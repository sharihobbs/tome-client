import React from 'react';
import {shallow} from 'enzyme';

import TitleCard  from './title-card';

describe('<TitleCard />', () => {
  it('Renders without crashing', () => {
      shallow(<TitleCard />);
  });
});
