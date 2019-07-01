import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

const Loader = (props) => {
	return (
		<div>
			<CircularProgress disableShrink />
		</div>
	)
}

export default Loader;