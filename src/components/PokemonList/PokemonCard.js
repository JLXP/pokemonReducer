import React from 'react';
import { Image, Label, Grid, Icon } from 'semantic-ui-react';
import { MAIN_COLOR,FAV_COLOR } from '../../utils/constants';

const PokemonCard = ({pokemon}) => {
    return (
    <Grid.Column mobile={16} tablet={8} computer={4}>
        <div className="PokemonCard">
            <Icon name='favorite' color={FAV_COLOR}/>
            <Image centered src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png' alt='Pokemon front'></Image>
            <p className='Pokemon-title'>{pokemon.name}</p>
            <Label color={MAIN_COLOR}>Normal</Label>
        </div>
    </Grid.Column>
    )
}

export default PokemonCard