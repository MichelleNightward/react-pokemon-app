import React from "react";

export const PokemonNameAndButton = (props) => {
    let nameElement = null;
    if (props.pokemonName) {
        nameElement = <h1>Hey, my name is {props.pokemonName}!</h1>
    }
    return (
        <div className="PokemonNameAndButton">
            {nameElement}
            <button onClick={props.onClick}>
                Click Me!
            </button>
        </div>
    );
};

export default PokemonNameAndButton;