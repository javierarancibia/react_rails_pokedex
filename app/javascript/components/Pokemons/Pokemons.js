import React, { useState, useEffect } from "react";
import axios from "axios";
import PokemonList from "./PokemonList";
import PokemonItem from "./PokemonItem";

const Pokemons = (props) => {
  const [pokemon, setPokemon] = useState([]);

  const handlePokemonAdd = (e) => {
    setPokemon(e);
    console.log(pokemon);
  };

  return (
    <div>
      <ul>
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
      </ul>
    </div>
  );
};

export default Pokemons;
