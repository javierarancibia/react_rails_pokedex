import React, { useState, useEffect } from "react";
import axios from "axios";
import PokemonList from "./PokemonList";
import { Grid, Container, Box } from "@material-ui/core/";
import PokeSpinner from './poke.gif'

const Pokemons = (props) => {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect(() =>{
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [])




  const handlePokemonAdd = (e) => {
    setPokemon(e);
    console.log(pokemon);
  };

  return (
    <div style={{marginTop: '6rem', marginLeft: '6rem'}}>
      {loading ? <Container><Box><img src={PokeSpinner} style={{marginLeft: '8rem'}}/></Box></Container> :
      <Container>
        <Box display="flex">
          <Grid container spacing={3} >
            {props.data.map((poke) => (
              <PokemonList
                key={poke.name}
                onAddPokemon={handlePokemonAdd}
                img={poke.img}
                name={poke.name}
                ability={poke.poke_ability}
                type={poke.poke_type}
                weight={poke.weight}
                pokeId={poke.poke_id}
              />
            ))}
          </Grid>
        </Box>
      </Container>}
    </div>
  );
};

export default Pokemons;
