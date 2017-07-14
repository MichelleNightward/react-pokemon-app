import React from "react";
import './PokemonSprite.css';

export const PokemonSprite = (props) => {
    let imageElement = null;
    if (props.pokemonSprite) {
        imageElement = <img src={props.pokemonSprite} className="pokemon-sprite" alt="Oh no! There's no sprite." />
    }
    return (
        <div className="PokemonSprite">
            {imageElement}
            <h2 className="pokemon-sprite-text">Find your Poke-Buddy</h2>
        </div>
    );
};

export default PokemonSprite;