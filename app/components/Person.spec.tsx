import * as React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';
import 'mocha';

import { Person } from './Person';

describe('<Person />', function () {
  it('Should print first name', function () {
    const wrapper = shallow(<Person firstName="Paul" lastName="Stovell"/>);
    expect(wrapper.find('dd').at(0).text()).to.eq("Paul");
    expect(wrapper.find('dd').at(1).text()).to.eq("Stovell");
  });
});
