import axios from 'axios';
import {types} from './types';

export const fetchWines = () => {
	let req = axios.get('https://test.wineapp.me/api/v1/wines')
		.then(res =>  res.data)
			.catch(err => {
				console.log(err);
			})

	return {
		type: types.GET_WINES,
		payload: req
	}
}

