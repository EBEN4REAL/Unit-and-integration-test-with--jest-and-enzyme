import React from 'react';

import logo from './logo.svg';
import './App.scss';
import Header from './components/Header';
import Headline from './components/Headline';
import ListItem from './components/ListItem';
import {connect}  from 'react-redux';
import {fetchWines} from './store/actions';
import Button from '@material-ui/core/Button';

// Card importsw
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const tempArr = [{
  name: 'Eben',
  age: 24,
  isTall: false
}]

const useStyles = makeStyles({
  card: {
    width: 300
  }
})

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
              <Button variant="contained" color="primary" onClick={() => this.fetchWines()}>
                Load Wines
              </Button>

              <div style={{marginTop: '50px'}}>
                 <Card style={{width: '300px'}}>
                  <CardActionArea>
                    <CardMedia
                      style={{height: '200'}}
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ6da-FK-uZjxTxYYNGSbKi0cumc1CoHS673iHweXh1laMakXG"
                      title="Contemplative Reptile"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        Lizard
                      </Typography>
                      <Typography variant="body2" color="textSecondary" component="p">
                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                        across all continents except Antarctica
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button size="small" color="primary">
                      Share
                    </Button>
                    <Button size="small" color="primary">
                      Learn More
                    </Button>
                  </CardActions>
                </Card>
              </div>
             
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
