import { useState } from 'react'

function PokemonDet({pokemon, pokemonList, setPokemonList, isDuplicated, setIsDuplicated}) {                
    const errorMsg = 'This Pokémon is already in your Pokédex';        
    const pokemonName = pokemon.forms[0].name.charAt(0).toUpperCase() + pokemon.forms[0].name.slice(1);

    return (
        <>
            <div id='pokemonGeneralInfo'>
                <span>Name: {pokemonName}</span>
                <span>Weight: {pokemon.weight}</span>
                <span>Height: {pokemon.height}</span>
                <div id='type-box'>
                    <span>Type:</span>
                    <div id='type-list'>
                    {pokemon.types && pokemon.types.map(
                        type => {
                            const typeName = type.type.name.charAt(0).toUpperCase() +
                            type.type.name.slice(1);
                            
                            return(
                                <div className={
                                    type.type.name === '???'
                                    ? "type-item unknown" 
                                    : `type-item ${type.type.name}`
                                }
                                    key={crypto.randomUUID()}                        
                                >
                                    {typeName}
                                </div>
                            )
                        }
                    )}
                    </div>                    
                </div>                                   
            </div>                 
            <div id='pokemon-box'>
                <div id='pokemon-card'>
                    <img src={pokemon.sprites.front_default} alt="pokemon image" />
                    <audio src={pokemon.cries.legacy} controls />                
                    <button id='add-to-pokedex-btn' onClick={(evt) => {
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
                </div>
                <div id='stats-box'>
                    <h4>Stats:</h4>              
                    {
                        pokemon.stats &&
                        <ul>
                            {pokemon.stats.map(
                                stat =>                                    
                                    <div key={crypto.randomUUID()}>                                        
                                        {stat.stat.name}
                                        <div>
                                            <progress value={stat.base_stat} max="255"></progress>
                                            {` ${stat.base_stat}/255`}                                        
                                        </div>
                                    </div>                                
                            )}                            
                        </ul>
                    }
                </div>            
            </div>
        </>
    )
}

export default PokemonDet