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
    expect(wrapper.find(Person).at(0).contains(<Person firstName="Paul" lastName="Stovell" />)).to.eq(true);
    expect(wrapper.find(Person).at(1).contains(<Person firstName="Sonia" lastName="Stovell" />)).to.eq(true);
  });
});
