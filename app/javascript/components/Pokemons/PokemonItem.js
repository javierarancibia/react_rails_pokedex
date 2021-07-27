import React, { useState, useEffect } from 'react'
import axios from 'axios'
 const PokemonItem = (props) => {

    const [pokemon, setPokemon] = useState([])
    

    useEffect(() =>{
        console.log(props.pokemon)

    }, [])



    return (
        <div>
            <h1>PokemonItem</h1>
        </div>
    )
}

export default PokemonItem
