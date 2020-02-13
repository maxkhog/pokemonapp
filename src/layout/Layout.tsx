import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import PokemonList from '../components/PokemonList';
import LocalPokemomList from '../components/LocalPokemonList';

const AppWrapper = styled.div`
    display: flex;
    flex-direction: column;
    min-width: 100vw;
    min-height: 100vh;
`

const Header = styled.div`
    display: flex;
    align-items: center;
    height: 60px;
    padding: 0 40px;
    background-color: rebeccapurple;
    span {
      font-size: 20px;
      color: #fff;
    }
`

const Main = styled.div`
    display: flex;
    flex-direction: row;
`

const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-grow: 1;
    padding-top: 20px;
    padding-left: 20px;
`
const Layout: FunctionComponent = ({ children }) => {

    return (
        <AppWrapper>
            <Header>
                <span>PokemonAPP</span>
            </Header>
            <Main>
                <PokemonList />
                <Content>
                    {children}
                </Content>
                <LocalPokemomList/>
            </Main>
        </AppWrapper>
    )
}

export default Layout;