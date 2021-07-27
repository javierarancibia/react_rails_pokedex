import React, { useState } from "react";
import PokeModal from "./PokeModal";
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
          <Button size="small" color="primary">
            Id: { props.pokeId} / { props.weight} KG / Tipo: { props.type}            
          </Button>
          <PokeModal pokeId={props.pokeId}/>
            
          </CardContent>
        </CardActionArea>
      </Card>
  
  );
};

export default PokemonList;
