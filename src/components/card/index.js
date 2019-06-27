import React from 'react';


// Card importsw
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


class CardComponent extends React.Component {
  
    render() {
        return (
          <div data-test="cardComponent">
              <div style={{marginTop: '50px'}} >
                 <Card style={{width: '300px'}} >
                  <CardActionArea>
                    <CardMedia
                      style={{height: '150px'}}
                      image="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/cheap-wine-1525366740.jpg?crop=1.00xw:1.00xh;0,0&resize=768:*"
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
          </div>
        );
    }
}


export default CardComponent;
