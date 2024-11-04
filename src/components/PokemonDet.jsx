import { useState } from 'react'

function PokemonDet({pokemon, pokemonList, setPokemonList, isDuplicated, setIsDuplicated}) {                
    const errorMsg = 'This Pokémon is already in your Pokédex';

    return (
        <>
            <span>Name: {pokemon.forms[0].name}</span>
            <span>Weight: {pokemon.weight}</span>
            <span>Height: {pokemon.height}</span>
            <span>Type:</span>                        
            {
                pokemon.types && 
                <ul>
                    {pokemon.types.map(type =><li key={crypto.randomUUID()}>{type.type.name}</li>)}
                </ul>
            }
            <span>Statistics:</span>              
            {pokemon.stats.map(stat =><li key={crypto.randomUUID()}>{stat.stat.name} {stat.base_stat}</li>)}
            <img src={pokemon.sprites.front_default} alt="pokemon image" />
            <audio src={pokemon.cries.legacy} controls />                
            <button onClick={(evt) => {
                if(!pokemonList.find(ele => ele.id === pokemon.id)){
                    setPokemonList([...pokemonList, pokemon]);
                    localStorage.setItem('pokemonList', JSON.stringify([...pokemonList, pokemon]));
                    setIsDuplicated(false);
                }
                else{                    
                    setIsDuplicated(true);                    
                }                 
            }}>Add to your Pokédex</button>
            {isDuplicated && <p>{errorMsg}</p>}
        </>
    )
}

export default PokemonDet