import React , {Component} from 'react';
import propTypes from 'prop-types';

class SharedButton extends Component {

	submitEventHandler = () => {
		if(this.props.emitEvent){
			this.props.emitEvent();
		}
	}

	render(){
		const {buttonText} = this.props;
		return (
			<button onClick={() => this.submitEventHandler()} data-test="buttonComponent">

			</button>
		)
	}
}

SharedButton.propTypes = {
	buttonText: propTypes.string,
	emitEvent: propTypes.func
};

export default SharedButton;