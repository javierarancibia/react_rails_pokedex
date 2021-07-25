import React from 'react'
import Pokemons from './Pokemons/Pokemons'

const App = (props) => {
    return (
        <div>
            <Pokemons data={props.data}/>
        </div>
    )
}

export default App
