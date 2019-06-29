import checkPropTypes from 'check-prop-types';
import {applyMiddleware, createStore} from 'redux';
import rootReducer from '../../src/store/reducers';
import {middlewares} from '../../src/store'

export const findByTestAttribute = (component, attr) => {
 	const wrapper = component.find(`[data-test='${attr}']`);
 	return wrapper;
};

export const checkProps = (component, expectedProps) => {
	const propsErr = checkPropTypes(component.propTypes, expectedProps, 'props', component.name);
	return propsErr;
};

export const testStore = (initialState) => {
	const createStoreWithMiddleware = createStoreWithMiddleware(RootReducer);
	return createStoreWithMiddleware(rootReducer, initialState);
}