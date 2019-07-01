import axios from 'axios';
import {types} from './types';
import {configParams} from '../../config';
import {connect} from 'react-redux';


export const fetchWines = () => {
	let req = axios.get(configParams.apiUrl)
		.then(res =>  res.data)
			.catch(err => {
				console.log(err);
			});
	return {
		type: types.GET_WINES,
		payload: req,
	}
}



