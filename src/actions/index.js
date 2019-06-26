import axios from 'axios';
import types from './types';

export const fetchWines = () => {
	axios.get('https://test.wineapp.me/api/v1/wines')
		.then(res => {
			console.log(res.data);
		})
		.catch(err => {
			console.log(err);
	})
}

