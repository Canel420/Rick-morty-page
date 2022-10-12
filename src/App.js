import imageRickMorty from "./img/rickmorty.png";
import { useState } from "react";
import Characters from "./components/Characters";
import './App.css';

function App() {
  const [characters, setCharacters] = useState(null);
  const reqApi = async () => {
    const api = await fetch("https://rickandmortyapi.com/api/character");
    const characterApi = await api.json();

    setCharacters(characterApi.results);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title"> Rick & Morty</h1>
        {characters ? (
          <Characters characters={characters} setCharacters={setCharacters} />
        ) : (
          <>
            <img src={imageRickMorty} alt="Rick & Morty" className="img-home"/>
            <button onClick={reqApi} className="btn-search"> 
                Characters
            </button>
            </>
        )}
      </header>
    </div>
  );
}

export default App;
