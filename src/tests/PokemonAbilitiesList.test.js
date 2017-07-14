import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';
import PokemonAbilitiesList from '../components/PokemonAbilitiesList';

describe("PokemonAbilitiesList component -> ", () => {

    const div = document.createElement('div');
    var abilities = [
        {
            "slot": 3,
            "is_hidden": true,
            "ability": {
                "url": "https://pokeapi.co/api/v2/ability/27/",
                "name": "effect-spore"
            }
        },
        {
            "slot": 1,
            "is_hidden": false,
            "ability": {
                "url": "https://pokeapi.co/api/v2/ability/34/",
                "name": "chlorophyll"
            }
        }
    ];

    it('renders without crashing', () => {
        ReactDOM.render(<PokemonAbilitiesList abilities={abilities} />, div);
    });

    it('renders provided abilities', () => {
        const renderedAbilities = shallow(
            <PokemonAbilitiesList abilities={abilities} />
        );
        expect(renderedAbilities.text()).toEqual('My possible abilities areeffect-sporechlorophyll');
    });

});