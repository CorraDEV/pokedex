import { useState } from 'react'
import SearchBar from './components/SearchBar'
import PokemonDet from './components/PokemonDet'
import Pokedex from './components/Pokedex'

function App() {  
  const [pokemon, setPokemon] = useState('');
  const [pokemonList, setPokemonList] = useState([]);  
  const [isDuplicated, setIsDuplicated] = useState(false);        

  return (
    <>
      <SearchBar pokemon = {pokemon} setPokemon = {setPokemon} setIsDuplicated = {setIsDuplicated}/>
      {pokemon && <PokemonDet pokemon = {pokemon} 
      pokemonList = {JSON.parse(localStorage.getItem("pokemonList")) || pokemonList} 
      setPokemonList = {setPokemonList} setIsDuplicated = {setIsDuplicated} 
      isDuplicated = {isDuplicated}/>}      
      <Pokedex 
      pokemonList = {JSON.parse(localStorage.getItem("pokemonList")) || pokemonList}
      setPokemonList = {setPokemonList} setPokemon = {setPokemon} setIsDuplicated = {setIsDuplicated}/>
    </>
  )
}

export default App