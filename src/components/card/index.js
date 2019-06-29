import React from 'react';
import {connect} from 'react-redux';
import './styles.scss';
import {configParams} from '../../config';


 const CardComponent = (props) => {
    return (
      <div data-test="cardComponent">
           <div className="cardSection">
               
              <p><b>Wine Name: </b></p>
              <p className="price"></p>
              <p className="producer">Produced by <b></b></p>
              <p><button>View Details</button></p>
          </div>
      </div>
     
    );
 }
const mapStateToProps = (state) => {
  return {
    wines: state.winesReducer.newWines
  }
}

export default connect(mapStateToProps)(CardComponent);
