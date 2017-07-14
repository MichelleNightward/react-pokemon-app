import React from 'react';
import ReactDOM from 'react-dom';
import AbilitiesList from '../components/PokemonAbilitiesList';

describe("PokemonAbilitiesList component -> ", () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<AbilitiesList />, div);
    });
});