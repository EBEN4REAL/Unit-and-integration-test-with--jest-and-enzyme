import React from 'react';

import logo from './logo.svg';
import './App.scss';
import Header from './components/Header';
import Headline from './components/Headline';
import ListItem from './components/ListItem';
import Button from './components/button';
import {connect}  from 'react-redux';
import {fetchWines} from './actions';

const tempArr = [{
  name: 'Eben',
  age: 24,
  isTall: false
}]

class App extends React.Component {


  state = {
    listItems: [{title: "Eben 1", desc: "desc 1"}, {title: "Eben 2", desc: "desc 2"}],

  }

  componentDidMount(){
    this.props.dispatch(fetchWines()).then(res => {
      console.log(res.payload);
    })
  }

    render() {

      const configButton = {
        buttonText: 'Get Wines',
        emitEvent: this.fetch
      }
        return (
          <div>
            <Header />
            <section className="main">
              <Headline header="Wines" tempArr={tempArr} desc="Click the button to render wines!"/>
              <Button {...configButton} />
              
            </section>
            
          </div>
        );
    }
}

const mapStateToProps = (state) => {
  return {
    wines: state.wines
  }
}

export default connect(mapStateToProps)(App);
