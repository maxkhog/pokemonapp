const webApiUrl = 'https://pokeapi.co/api/v2/'

export interface PokemonListData {
    count: number,
    results:PokemonListDataResults []
}

export interface PokemonListDataResults {
    name: string,
    url: string,
    id: number
} 

class PokemonService {
    static getPokemonList = async (limit: number | string = 20, offset: number | string = 0): Promise<PokemonListData> => {
        const options: RequestInit = {
            method: "GET",
        }
        const request: Request = new Request(webApiUrl + `pokemon/?limit=${limit}&offset=${offset}`);
        const response: Response = await fetch(request, options);
        const { results, count }:  PokemonListData  = await response.json();
        return { results, count };
    }

    static getPokemon = async (id: string ) =>{
        const options: RequestInit = {
            method: "GET",
        };
        const request: Request = new Request(webApiUrl + 'pokemon/' + id);
        const response: Response = await fetch(request, options);
        const data = await response.json();

        return data;
    }
}

export default PokemonService;