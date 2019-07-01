import React from 'react';
import Enzyme from 'enzyme';
import {shallow} from 'enzyme';
import enzymeAdapter from 'enzyme-adapter-react-16';
import WinesComponent from './index';
import {store} from '../../store';
import {Provider} from 'react-redux';
import ReactDom from 'react-dom';

Enzyme.configure({
	adapter: new enzymeAdapter()
});


describe("Wines compoennt" , () => {
	const propsConfig = {
		wineRendered: true
	}

	
	it("Renders without errors" , () => {
		const component = (<Provider store={store}><WinesComponent  {...propsConfig} /></Provider>)
		// const newComponent = shallow(component);
		// const wrapper = newComponent.find(`[data-test='winesComponent']`);
		// expect(wrapper.length).toBe(1);
		const div = document.createElement("div");
		ReactDom.render(component , div);
	});
})