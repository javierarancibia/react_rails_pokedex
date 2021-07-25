import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Pokemons = (props) => {

    const [pokemons, setPokemons] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3000/pokemon')
        .then((response) => {
            setPokemons({...response})
            console.log(props.data)
            // console.log(pokemons)
          })
    }, [])

        return (
        <div>
            <h2>{ props.data[0].species.name} </h2>
            <h2>{ props.data[2].species.name} </h2>
        </div>
    )
}

export default Pokemons
