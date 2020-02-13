import React, { FunctionComponent, useEffect, useState } from 'react';
import styled from '@emotion/styled';

import PS, { PokemonListData } from '../service/pokemonService'
import { Link } from 'react-router-dom';

const PokemonListWrapper = styled.div`
    height: calc(100vh - 60px);
    width: 200px;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    a {
        border-bottom: 1px solid black;
        text-align: center;
        padding: 10px 5px;
        text-decoration: none;

        &:active {
            
        }
    }

`


const PokemonList: FunctionComponent = () => {
    const [pokemons, setPokemons] = useState<PokemonListData>({ count: 0, results: [] })

    useEffect(() => {
        const fetchPokemons = async () => {
            const { results, count } = await PS.getPokemonList(1000);
            setPokemons(() => ({ count, results }));
        }
        fetchPokemons();
    }, [])

    return <PokemonListWrapper>
        {pokemons.results.map((p)=> <Link to={`/pokemon/${p.name}`} key={p.name}>{p.name}</Link>)}
    </PokemonListWrapper>
}




export default PokemonList