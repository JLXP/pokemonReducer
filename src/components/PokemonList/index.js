import React from "react";
import { Grid } from "semantic-ui-react";
import PokemonCard from './PokemonCard';
import first_letter_uppercase_word from '../../helpers/toUpperCase';
import './styles.css';


const PokemonList = ({pokemons}) => {
    
    return (
        <Grid className="PokemonList">
            {pokemons.map((pokemon, index) => {
                pokemon.name= first_letter_uppercase_word(pokemon.name);
                return <PokemonCard pokemon={pokemon} key={`pokemon-${index}`} />;
            })}
        </Grid>
    )

}

PokemonList.defaultProps = {
    pokemons: [],
}

export default PokemonList;