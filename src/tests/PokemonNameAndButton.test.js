import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';
import PokemonNameAndButton from '../components/PokemonNameAndButton';

describe("PokemonNameAndButton component -> ", () => {
    const div = document.createElement('div');
    it('renders without crashing', () => {
        ReactDOM.render(<PokemonNameAndButton />, div);
    });

    it('renders provided name', () => {
        const nameAndButton = shallow(
            <PokemonNameAndButton pokemonName="Bulbasaur" />
        );
        expect(nameAndButton.text()).toContain('Bulbasaur');
    });
});