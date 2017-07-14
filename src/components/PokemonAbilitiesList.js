import React from "react";
import './PokemonAbilitiesList.css';

export const PokemonAbilitiesList = (props) => {
    console.log(props.abilities.length);
    if (props.abilities.length === 0) {
        return null;
    }
    return (
        <div className="AbilitiesList">
            <h1>My possible abilities are</h1>
            <ul>
                {props.abilities.map((listValue) => {
                    return <li>{listValue["ability"]["name"]}</li>;
                })}
            </ul>
        </div>
    );
};

export default PokemonAbilitiesList;