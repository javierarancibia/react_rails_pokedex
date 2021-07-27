import React, { useState, useEffect } from "react";
import axios from "axios";
import PokeModal from "./PokeModal";
const PokemonModalContainer = (props) => {
  const [pokemon, setPokemon] = useState([]);

//   useEffect(() => {
//     fetch(`https://pokeapi.co/api/v2/evolution-chain/${props.pokeId}/`)
//       .then((response) => {
//         if (response.ok) {
//           return response.json();
//         }
//         throw new Error("Request failed");
//       })
//       .then((responseJson) => {
        
//         return setPokemon(responseJson);
//       });
//       console.log(pokemon)
//   }, [pokemon.length]);

  return (
    <div>
      <PokeModal pokemonData={pokemon} />
    </div>
  );
};

export default PokemonModalContainer;
