import React , {Component} from 'react';
import propTypes from 'prop-types';

class SharedButton extends Component {

	render(){
		return (
			<button data-test="buttonComponent">

			</button>
		)
	}
}

SharedButton.propTypes = {
	buttonText: propTypes.string,
	emitEvent: propTypes.func
};

export default SharedButton;