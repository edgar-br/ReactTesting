import React from 'react';
import expect from 'expect';
import {shallow} from 'enzyme';
import Toolbar from '../src/components/Toolbar';
import Products from '../src/components/Products';
import App from '../src/App';

describe('App component', () => {
    it('should render the correct components', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find(Toolbar).length).toBe(1);
        expect(wrapper.find(Products).length).toBe(1);
    })
})