 import { observable, decorate, action, IObservableArray, computed } from 'mobx';
import LocalStorageService from '../service/localStorageService';


class PokemonStore {
    localPokemons:IObservableArray<string>;
    currentPokemon: string;
    currentPokemonChoose: boolean;

    constructor () {
        this.localPokemons = LocalStorageService.getItem("pokemons") || [];
        this.currentPokemon = "";
        this.currentPokemonChoose = false;
    }

    addCurrentPokemon = (pokemon: string) => {
        this.currentPokemon = pokemon;
    }

    addPokemon = (pokemon: string) => {
        if (this.localPokemons.includes(pokemon)) {
            return
        }
        this.localPokemons.push(pokemon);
        LocalStorageService.setItem("pokemons", this.localPokemons)
        this.currentPokemonChoose = this.localPokemons.includes(this.currentPokemon);
        console.log(this.currentPokemonChoose )
    }

    removePokemon = (pokemon: string) => {
        this.localPokemons.replace (this.localPokemons.filter(p => p !== pokemon));
        LocalStorageService.setItem("pokemons", this.localPokemons)
    }

    get checkCurrentPokemonInLocal():boolean  {
        return this.localPokemons.includes(this.currentPokemon)
    }
}

decorate(PokemonStore, {
    localPokemons: observable,
    currentPokemon:observable,
    currentPokemonChoose: observable,
    addPokemon: action,
    removePokemon: action,
    addCurrentPokemon: action,
    checkCurrentPokemonInLocal: computed
});

export default new PokemonStore();