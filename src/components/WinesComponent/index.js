import React from 'react';
import Paper from '@material-ui/core/Paper';

import Grid from '@material-ui/core/Grid';
import WineCard from '../card';

import { makeStyles } from '@material-ui/core/styles';
import Button  from '@material-ui/core/Button';
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

      let button;

      if(this.props.wineRendered){
      		button =  ( 
      			<button style=
      				{{
      					marginBottom: '20px', 
      					backgroundColor: "grey", 
      					padding: '5px',
      					color: '#FFFFFF',
      					outline: 'none',
      					border: 'none',
      					cursor: 'pointer'
      				}} 
      				color="primary" variant="contained" >Load More Wines...</button>
  			)
  	  }


		return (
			<div data-test='winesComponent'>
				 <Grid container spacing={3}>
				 	{loadWines}
			      </Grid>
				  {button}
			</div>
			

		)
	}
	
}

const mapStateToProps = (state) => {
  return {
    wines: state.winesReducer.newWines
  }
}

export default connect(mapStateToProps)(Wines);