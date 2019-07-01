import React from 'react';
import Paper from '@material-ui/core/Paper';

import Grid from '@material-ui/core/Grid';
import WineCard from '../card';

import { makeStyles } from '@material-ui/core/styles';
import {connect}  from 'react-redux';
import Card from '../card';



class Wines extends React.Component {

	render(){
		const {wines} = this.props;
	      let loadWines;
	      if(wines != null){
	        loadWines = wines.wines.map((wine, key) => (
	              <Card {...wine} key={key}/>
	        ));
	        console.log(wines.wines);
	      }

		return (
			 <Grid container spacing={3}>
		        {loadWines}
		      
		      </Grid>
		)
	}
	
}

const mapStateToProps = (state) => {
  return {
    wines: state.winesReducer.newWines
  }
}

export default connect(mapStateToProps)(Wines);