import { useState } from 'react'
import findPokemon from '../utils/findPokemon'

function SearchBar({pokemon, setPokemon, setIsDuplicated}) {          
    const [searchValue, setSearchValue] = useState('');
    const [searchValueCopy, setSearchValueCopy] = useState('');    
    const [isClicked, setIsClicked] = useState(false);                

    return (
        <div id='searchBar'>
            <h1>Search Pokémon</h1>
            <input placeholder='Enter a pokemon name' value={searchValue} onChange={(evt) => setSearchValue(evt.target.value)} type="text"/>
            <button onClick={async (evt) => {
                setIsClicked(true);                
                setSearchValueCopy(searchValue);                
                const pokemonFound = await findPokemon(searchValue);
                setPokemon(pokemonFound);
                setIsDuplicated(false);
            }}>Search</button>
            <p>Results for [{searchValueCopy}]</p>            
            {isClicked && !pokemon && <p id='searchBarError'>No results</p>}
        </div>
    )
}

export default SearchBar