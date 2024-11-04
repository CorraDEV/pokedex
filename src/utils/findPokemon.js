export default async function findPokemon(pokemonName) {                 
    const isNumeric = (string) => /^[+-]?\d+(\.\d+)?$/.test(string);    

    if(pokemonName === ''){            
        console.error('Invalid input. Empty string is not valid');
    }   
    else if(isNumeric(pokemonName)){
        console.error('Invalid input. Please enter a string.');        
    }
    else{        
        const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`;
        const response = await fetch(url);
        if(response.status === 200){
            const pokemon = await response.json();
            return pokemon;
        }        
    }
}