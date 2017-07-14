import React from 'react';
import ReactDOM from 'react-dom';
import Pokemon from '../components/PokemonNameAndButton';

describe("Pokemon component -> ", () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Pokemon />, div);
    });
});