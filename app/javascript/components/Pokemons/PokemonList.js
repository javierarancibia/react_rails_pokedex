import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  makeStyles,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Grid,
} from "@material-ui/core/";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

const PokemonList = (props) => {
  const [getPokemon, setGetPokemon] = useState("");

  const getPoke = (e) => {
    console.log(e);
    setGetPokemon(e.target.value);
    props.onAddPokemon(getPokemon);
  };

  const classes = useStyles();

  return (
    
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="300"
            image={props.img}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {props.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
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
  
  );
};

export default PokemonList;
