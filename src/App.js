import './App.css';
import SearchBox from './SearchBox';
import { useState, useEffect } from 'react'
import { getPokemonBytype } from './services/getPokemonBytype'
import Pokemons from './pokemons'

function App() {

  const[data, setData] = useState([])
  const [queryTerm, setQueryTerm] = useState('')

  const handleSearch = query => {
    setQueryTerm(query.toLowerCase());
  }

  useEffect(() => {
    if(queryTerm) {
      const func = async() => {
        const res = await getPokemonBytype(queryTerm)
        setData(res.pokemon)
      }

      func()

    }
  }, [queryTerm])

  const list = data.slice(0, 10).map((value) => <Pokemons url={value.pokemon.url} key={value.pokemon.name}/>)
  
  return (
    <div className="App">
        <div className="main-container">
        <div className ="child-01"> 
        <SearchBox onSearch={handleSearch}/>
        </div> 
        <div className="child-02">
        {list} 
        </div>
        </div>
    </div>
  );
}

export default App;
