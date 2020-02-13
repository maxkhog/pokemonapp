import React from 'react'
import PokemonStore from './PokemonStore'

const storeContext = React.createContext({ pokemonStore: PokemonStore })

// const Store: FunctionComponent = ({ children }) => {
//   return <storeContext.Provider > { children }</storeContext.Provider >
// }

export const useStore = () => {
  const store = React.useContext(storeContext)
  if (!store) {
    throw new Error('useStore must be used within a StoreProvider.')
  }
  return store
}