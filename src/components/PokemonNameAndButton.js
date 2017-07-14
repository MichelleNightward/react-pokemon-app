import React from "react";
import './PokemonNameAndButton.css'

export const PokemonNameAndButton = (props) => {
    let nameElement = null;
    if (props.pokemonName) {
        nameElement = <h1>Hey, my name is {props.pokemonName}!</h1>
    }
    return (
        <div className="PokemonNameAndButton">
            <button onClick={props.onClick}>
                Roll the dice.
            </button>
            {nameElement}
        </div>
    );
};

export default PokemonNameAndButton;