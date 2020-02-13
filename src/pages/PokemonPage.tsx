import React, { FunctionComponent, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from '@emotion/styled';

import PS from '../service/pokemonService'
import { useStore } from '../stores/StoreProvider';

type Pokemon = {
    name: string,
    weight: string,
    height: string,
    sprites: {
        front_default: string,
    }
}

const Name = styled.h1`
    font-size: 30px;
    color: rebeccapurple;
`
const PokemonInformation = styled.div`
    display: flex;
    align-items: center;
    img {
        width: 100px;
        height: 100px;
    }
`


const PokemonPage: FunctionComponent = () => {
    const [pokemon, setPokemon] = useState<Pokemon>({
        name: "",
        weight: "",
        height: "",
        sprites: {
            front_default: "",
        }
    })

    const [loading, setLoading] = useState(true)
    const { id = "" } = useParams();
    const { pokemonStore } = useStore();
    
    useEffect(() => {
        const fetchPokemons = async () => {
            const data = await PS.getPokemon(id);
            setPokemon(data);
            setLoading(false);
            return () => {
                setLoading(true)
            }
        }
        fetchPokemons();
    }, [id])
    if (loading) {
        return <>loading...</>;
    }
    return (
        <>
            <Name>{pokemon.name} </Name>
            <PokemonInformation>
                <img src={pokemon.sprites.front_default} alt="1"></img>
                <div>
                    <p>weight: {pokemon.weight}</p>
                    <p>height: {pokemon.height}</p>
                </div>
            </PokemonInformation>
            
            {!false ?
                <button onClick={() => pokemonStore.addPokemon(pokemon.name)}>add {pokemon.name}</button> :
                <button onClick={() => pokemonStore.removePokemon(pokemon.name)}>remove {pokemon.name}</button>
            }
        </>
    )
}

export default PokemonPage