import React from 'react';
import WineCard from '../card';
import {connect}  from 'react-redux';
import Card from '../card';



class Wines extends React.Component {

	state =  {
		currentPage: 1,
		nextPageUrl: null
	}

	nextPageUrl(){

	}

	render(){
	  
  	  const {wines} = this.props;
      let loadWines;
      let nexthref;
      if(wines != null){
        loadWines = wines.wines.map((wine, key) => (
              <Card {...wine} key={key}/>
        ));

        console.log(wines.wines);
        console.log(wines.meta.next_href);
      }
		return (
			<div>
				 {loadWines}
				 <button onClick={() => this.nextPageUrl()}>Next Page</button>
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