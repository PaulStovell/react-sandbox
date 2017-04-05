import * as React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';
import 'mocha';

import { Directory } from './Directory';
import { Person } from './Person';

describe('<Directory />', function () {
  it('Should list people', function () {
    const wrapper = shallow(<Directory numberOfPeople={2} />);
    expect(wrapper.find(Person)).to.have.length(2);
    expect(wrapper.find(Person).at(0).contains(<Person firstName="First 1" lastName="Last 1" />)).to.eq(true);
    expect(wrapper.find(Person).at(1).contains(<Person firstName="First 2" lastName="Last 2" />)).to.eq(true);
  });
});
