import React, { useState, useEffect } from "react";
import PokeModal from "./PokeModal";
const PokemonModalContainer = (props) => {
  const [pokemon, setPokemon] = useState([]);
  const [pokemonId, setPokemonId] = useState([]);

  const getFinalId = (e) => {
    setPokemonId(e)
  }

  console.log(props.pokeId)

  // useEffect(() => {
  //   fetch(`https://pokeapi.co/api/v2/evolution-chain/${pokemonId}/`, {mode: 'no-cors'})
  //     .then((response) => {
  //       if (response.ok) {
  //         return response.json();
  //       }
  //       throw new Error("Request failed");
  //     })
  //     .then((responseJson) => {
        
  //       return setPokemon(responseJson);
  //     });
  // }, []);

  return (
    <div>
      <PokeModal pokeId={props.pokeId} onAddId={getFinalId} />
    </div>
  );
};

export default PokemonModalContainer;
