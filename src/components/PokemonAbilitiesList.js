import React from "react";
import './PokemonAbilitiesList.css';

export const PokemonAbilitiesList = (props) => {
    return (
        <div className="AbilitiesList">
            <h1>Abilities:</h1>
            <ul>
                {props.abilities.map((listValue) => {
                    return <li>{listValue["ability"]["name"]}</li>;
                })}
            </ul>
        </div>
    );
};

export default PokemonAbilitiesList;