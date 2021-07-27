import React, { useState, useEffect } from "react";
import axios from "axios";
import PokemonList from "./PokemonList";
import PokemonItem from "./PokemonItem";
import { Grid, Container, Box } from "@material-ui/core/";

const Pokemons = (props) => {
  const [pokemon, setPokemon] = useState([]);

  const handlePokemonAdd = (e) => {
    setPokemon(e);
    console.log(pokemon);
  };

  return (
    <div>
      <Container>
        <Box>
          <Grid container spacing={3}>
            {props.data.map((poke) => (
              <PokemonList
                key={poke.name}
                onAddPokemon={handlePokemonAdd}
                img={poke.img}
                name={poke.name}
                ability={poke.poke_ability}
                poke_type={poke.poke_type}
                weight={poke.weight}
              />
            ))}
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default Pokemons;
