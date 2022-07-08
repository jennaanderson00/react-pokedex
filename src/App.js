import { useEffect, useState } from 'react'
import Header from './components/header'
import SearchForm from './components/searchForm'
import PokemonDetails from './components/pokemonDetails'
import Spinner from './components/spinner'

function App() {
  const [pokemon, setPokemon] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [searchTerm, setSearchTerm] = useState('ninetails')
  
  useEffect(() => {
    console.log('Running useEffect...')
  }, [])
  
  return (
    <>
      <Header />
      <SearchForm />
      <PokemonDetails />
      <Spinner />
    </>
  );
}

export default App;