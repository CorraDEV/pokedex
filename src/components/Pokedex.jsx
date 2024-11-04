import { useState } from 'react'

function Pokedex({pokemonList, setPokemonList, setPokemon, setIsDuplicated}) {            
    return (
        <>
            <h1>Your Pokédex</h1>
            {
                pokemonList.length > 0 &&
                pokemonList.map(pokemon => (
                    <div key={pokemon.id}>
                        <h2>{pokemon.forms[0].name}</h2>
                        <img src={pokemon.sprites.front_default} alt="pokemon image" />
                        <button onClick={(evt) => {                            
                            const pokemonListFiltered = pokemonList.filter(
                                ele => ele.id !== pokemon.id
                            );
                            setPokemonList([...pokemonListFiltered]);
                            localStorage.setItem('pokemonList', JSON.stringify([...pokemonListFiltered]));
                            setIsDuplicated(false);
                        }}>Delete</button>
                        <button onClick={(evt) => {                                                        
                            const pokemonSelected = pokemonList.find(ele => ele.id === pokemon.id); 
                            setPokemon(pokemonSelected);
                            setIsDuplicated(false);                            
                        }}>Show</button>
                    </div>
                ))                                
            }
        </>
    )
}                                    

export default Pokedex