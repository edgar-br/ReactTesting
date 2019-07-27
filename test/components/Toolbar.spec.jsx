import React from 'react';
import expect from 'expect';
import {shallow} from 'enzyme';
import Toolbar from '../../src/components/Toolbar';
import { Navbar } from "react-materialize";

describe('Toolbar component', () => {
    it('should render the correct component', () => {
        const wrapper = shallow(<Toolbar />);
        expect(wrapper.find(Navbar).length).toBe(1);
        const { fixed, alignLinks, className } = wrapper.find(Navbar).props();
        expect(fixed).toBe(true);
        expect(alignLinks).toBe('right');
        expect(className).toBe('blue darken-4');
    })
})