function Pokedex({pokemonList, setPokemonList, setPokemon, setIsDuplicated}) {                    
    return (
        <div id='pokedex'>
            <h1>Your Pokédex</h1>
            <div id='pokemon-list'>
            {
                pokemonList.length > 0 &&
                pokemonList.map(pokemon => {
                    const pokemonName = pokemon.forms[0].name.charAt(0).toUpperCase() + pokemon.forms[0].name.slice(1);
                    const pokemonGif =
                    pokemon.sprites.versions['generation-v']['black-white'].animated.front_default;
                    //
                    return (
                        <div className='pokemon-item' key={pokemon.id}>
                            <h2>{pokemonName}</h2>
                            <img className="pokemon-item-gif" src={pokemonGif} alt="pokemon img"/>                        
                            <button onClick={(evt) => {                                                        
                                const pokemonSelected = pokemonList.find(ele => ele.id === pokemon.id); 
                                setPokemon(pokemonSelected);
                                setIsDuplicated(false);                            
                            }}>Show</button>
                            <button onClick={(evt) => {                            
                                const pokemonListFiltered = pokemonList.filter(
                                    ele => ele.id !== pokemon.id
                                );
                                setPokemonList([...pokemonListFiltered]);
                                localStorage.setItem('pokemonList', JSON.stringify([...pokemonListFiltered]));
                                setIsDuplicated(false);
                            }}>Delete</button>
                        </div>
                    )
                })                                
            }
            </div>
        </div>
    )
}                                    

export default Pokedex