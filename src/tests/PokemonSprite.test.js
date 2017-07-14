import React from 'react';
import ReactDOM from 'react-dom';
import PokemonSprite from '../components/PokemonSprite';

describe("PokemonSprite component -> ", () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<PokemonSprite />, div);
    });
});