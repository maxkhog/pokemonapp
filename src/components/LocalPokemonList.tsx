import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import { observer } from 'mobx-react'

import { useStore } from '../stores/StoreProvider';

const LocalPokemomListWrap = styled.div`
    height: calc(100vh - 60px);
    width: 200px;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    align-items: center;
    button {
        width: 100%;
        border-bottom: 1px solid black;
        text-align: center;
        padding: 10px 5px;
        text-decoration: none;
    }
`

const LocalPokemomList: FunctionComponent = observer(() => {
    const { pokemonStore } = useStore();
    return (
        <LocalPokemomListWrap>
            My local Pokemons
            {pokemonStore.localPokemons.map(p => <button key={p} onClick={() => pokemonStore.removePokemon(p)}>{p}</button>)}
        </LocalPokemomListWrap>
    )
})

export default LocalPokemomList;