import React, { useState } from "react";
import { Link } from "react-router-dom";

const PokemonList = (props) => {
  
  
  const [getPokemon, setGetPokemon] = useState("");
  
  
  const getPoke = (e) => {
      console.log(e)
    setGetPokemon(e.target.value);
    props.onAddPokemon(getPokemon);
  };

  return (

    <li>
      <h1>{ props.name }</h1>
    </li>

  )
    
};

export default PokemonList;
