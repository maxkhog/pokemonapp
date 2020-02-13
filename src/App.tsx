import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';

import { Layout } from './layout'
import PokemonPage from './pages/PokemonPage'

const App = () => {

  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path="/pokemon/:id">
            <PokemonPage/>
          </Route>
          <Route path="/">
            Main page
          </Route>
        </Switch>
      </Layout >
    </BrowserRouter>
  );
}

export default App;
