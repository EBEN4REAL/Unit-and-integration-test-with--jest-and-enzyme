import axios from 'axios';
import types from './types';

export const fetchPosts = () => async (dispatch) => {
	await axios.get('https://test.wineapp.me/api/v1/wines')
		.then(res => {
			dispatch({
				type: types.GET_WINES,
				payload:  red.data
			})
		})
		.catch(err => {
			consoe.log(err);
		})
};
