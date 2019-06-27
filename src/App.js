import React from 'react';

import logo from './logo.svg';
import './App.scss';
import Header from './components/Header';
import Headline from './components/Headline';
import ListItem from './components/ListItem';
import Button from './components/button';
import {connect}  from 'react-redux';
import {fetchWines} from './store/actions';

const tempArr = [{
  name: 'Eben',
  age: 24,
  isTall: false
}]

class App extends React.Component {


    fetchWines = () => {
        this.props.dispatch(fetchWines()).then(res => {
        console.log(res.payload);
        console.log(this.props);
      })
    }
  
    render() {
        console.log(this.props);
        return (
          <div>
            <Header />
            <section className="main">
              <Headline header="Wines" tempArr={tempArr} desc="Click the button to render wines!"/>
              <Button  buttonText="Get Wines" emitEvent = {() => this.fetchWines()} />
            </section>
            
          </div>
        );
    }
}

const mapStateToProps = (state) => {
  return {
    wines: state.winesReducer.newWines
  }
}

export default connect(mapStateToProps)(App);
