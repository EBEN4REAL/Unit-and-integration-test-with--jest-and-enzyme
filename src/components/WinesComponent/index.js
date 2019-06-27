import React from 'react';
import Paper from '@material-ui/core/Paper';

import Grid from '@material-ui/core/Grid';
import WineCard from '../card';

import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));



const Wines = (props) => {
	const classes = useStyles();

	return (
		 <Grid container spacing={3}>
	        <Grid item xs={12}>
	          <Paper className={classes.paper}>xs=12</Paper>
	        </Grid>
	        <Grid item xs={12} sm={6}>
	          <Paper className={classes.paper}>xs=12 sm=6</Paper>
	        </Grid>
	        <Grid item xs={12} sm={6}>
	          <Paper className={classes.paper}>xs=12 sm=6</Paper>
	        </Grid>
	        <Grid item xs={6} sm={3}>
	          <Paper className={classes.paper}>xs=6 sm=3</Paper>
	        </Grid>
	        <Grid item xs={6} sm={3}>
	          <Paper className={classes.paper}>xs=6 sm=3</Paper>
	        </Grid>
	        <Grid item xs={6} sm={3}>
	          <Paper className={classes.paper}>xs=6 sm=3</Paper>
	        </Grid>
	        <Grid item xs={6} sm={3}>
	          <Paper className={classes.paper}>xs=6 sm=3</Paper>
	        </Grid>
	      </Grid>
	)
}

export  default Wines