import { useState } from 'react'
import findPokemon from '../utils/findPokemon'

function SearchBar({pokemon, setPokemon, setIsDuplicated}) {          
    const [searchValue, setSearchValue] = useState('');
    const [searchValueCopy, setSearchValueCopy] = useState('');    
    const [isClicked, setIsClicked] = useState(false);        

    return (
        <>
            <h1>Search Pokémon</h1>
            <input value={searchValue} onChange={(evt) => setSearchValue(evt.target.value)} type="text" />
            <button onClick={async (evt) => {
                setIsClicked(true);
                setSearchValueCopy(searchValue);
                pokemon = await findPokemon(searchValue);
                setPokemon(pokemon);
                setIsDuplicated(false);
            }}>Search</button>
            <p>Results for [{searchValueCopy}]</p>
            {!pokemon && isClicked && <p>No results</p>}
        </>
    )
}

export default SearchBar