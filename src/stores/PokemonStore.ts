import { observable, decorate, action, IObservableArray, computed } from 'mobx';
import LocalStorageService from '../service/localStorageService';


class PokemonStore {
    localPokemons:IObservableArray<string>;
    currentPokemonChoose: boolean;

    constructor () {
        this.localPokemons = LocalStorageService.getItem("pokemons") || [];
        this.currentPokemonChoose = false;
    }

    addPokemon = (pokemon: string) => {
        if (this.localPokemons.includes(pokemon)) {
            return
        }
        this.localPokemons.push(pokemon);
        LocalStorageService.setItem("pokemons", this.localPokemons)
        console.log(this.currentPokemonChoose )
    }

    removePokemon = (pokemon: string) => {
        this.localPokemons.replace (this.localPokemons.filter(p => p !== pokemon));
        LocalStorageService.setItem("pokemons", this.localPokemons)
    }


}

decorate(PokemonStore, {
    localPokemons: observable,
    currentPokemonChoose: observable,
    removePokemon: action,
    addPokemon: action

});

export default new PokemonStore();