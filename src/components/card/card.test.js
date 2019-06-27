import {shallow} from 'enzyme';
import enzymeAdapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';
import Card from './index';
import React from 'react';

Enzyme.configure({
	adapter: new enzymeAdapter()
});


describe("Card Component" , () => {
	it("Should render without crashing" , () => {
		const component = shallow(<Card />);
		console.log(component);
		const cardWrapper = component.find(`[data-test='cardComponent']`);
		expect(cardWrapper.length).toBe(1);
	})
});