import React from 'react';

import logo from './logo.svg';
import './App.scss';
import Header from './components/Header';
import Headline from './components/Headline';
import ListItem from './components/ListItem';

const tempArr = [{
  name: 'Eben',
  age: 24,
  isTall: false
}]

class App extends React.Component {

  state = {
    listItems: [{title: "Eben 1", desc: "desc 1"}, {title: "Eben 2", desc: "desc 2"}],

  }

    render() {
      // console.log(this.state.listItems);
      // let listItems = [...this.state.listItems];
      // console.log(listItems);
      // const newlistItems = listItems.map((ListItem,key) => {
      //   return (
      //     <ListItem title={ListItem.title} desc={ListItem.desc} key={key} />
      //   )
      // });
      
        return (
          <div>
            <Header />
            <section className="main">
              <Headline header="Wines" tempArr={tempArr} desc="Click the button to render wines!"/>
              <div>
              </div>
              
            </section>
            
          </div>
        );
    }
}

export default App;
