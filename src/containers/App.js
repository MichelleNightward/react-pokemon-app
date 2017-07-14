import React, { Component } from 'react';
import './App.css';
import { PokemonNameAndButton } from '../components/PokemonNameAndButton';
import { PokemonAbilitiesList } from '../components/PokemonAbilitiesList';
import { PokemonSprite } from '../components/PokemonSprite';

class App extends Component {

    getPokemonURL = "http://pokeapi.co/api/v2/pokemon/";

    constructor(props) {
        super(props);
        this.state = {
            pokemonName: "",
            pokemonSprite: "",
            // TODO: fix formatting to prevent 'Warning: Each child in an array or iterator should have a unique "key"'
            abilities: []
        };
        this.getRandomPokemon = this.getRandomPokemon.bind(this);
    }

    getRandomPokemon() {
        this.getPokemon(this.generateRandomId());
    }

    getPokemon(id) {
        fetch(this.getPokemonURL+id.toString())
          .then((response) => {
              return response.json()
          }).then((json) => {
            this.setState(
                {
                    pokemonName: json["name"],
                    pokemonSprite: json["sprites"]["front_default"],
                    abilities: json["abilities"]
                }
            );
        }).catch(function(ex) {
          console.log('parsing failed', ex)
        });
    }

    generateRandomId() {
        var highestPokemonId = 721;
        return Math.floor(Math.random() * highestPokemonId) + 1
    }

    render() {
        return (
          <div className="App">
              <PokemonSprite
                  pokemonSprite={this.state.pokemonSprite}
              />
              <PokemonNameAndButton
                  pokemonName={this.state.pokemonName}
                  onClick={this.getRandomPokemon}
              />
              <PokemonAbilitiesList
                  abilities={this.state.abilities}
              />
          </div>
        );
    }
}

App.propTypes = {

};

export default App;
