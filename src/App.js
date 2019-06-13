import React from 'react';

import logo from './logo.svg';
import './App.scss';
import Header from './components/Header';
import Headline from './components/Headline';

const tempArr = [{
  name: 'Eben',
  age: 24,
  isTall: false
}]

class App extends React.Component {

    render(){
        return (
          <div>
            <Header />
            <section className="main">
              <Headline header="Wines" tempArr={tempArr} desc="Click the button to render wines!"/>
            </section>
            
          </div>
        );
    }
}

export default App;
