import "./App.css";/*se importa el css de la pagina*/ 
import imagenrick from "./img/rick_morty_PNG11.webp";/*imagen de entrada*/ 
import { useState } from "react";/*Hook de estado, guarda estados de los componentes, permite tener un dato guardado en diferentes componentes*/ 
import Characters from "./Components/Characters";/*se importan los personajes de la api de rick y morty*/ 

function App() {/*aplicacion de react*/ 
  const [characters, setCharacters] = useState(null);/*personajes y se inicializa el estado , se obtienen los characters en plural ya que son varios */ 

  const reqApi = async () => {/*la informacion que se toma de la api, se hace una peticion a la api*/ 
    const api = await fetch("https://rickandmortyapi.com/api/character");/*seccion de peronsajes d ela api de rick y morty*/ 

    const charactersApi = await api.json();// se hace la llamada a los personajes de manera de json /
    setCharacters(charactersApi.results);/*informacion de los personajes */
  };

  return (/*inicio donde esta la imagen y el boton para buscar personajes, una vez se presiona el boton , se inicia la peticion a la api */ 
    <div className="App">
      <header className="App-header">
        <h1 className="title">Rick & Morty </h1>
        {characters ? (//se filtra si esto tiene informacion con un terniario, si hay informacion, se va asignando a la variable desde la api
          <Characters characters={characters} setCharacters={setCharacters} />
        ) : (
          <>
            <img src={imagenrick} alt="Rick & Morty" className="img-home" />
            <button onClick={reqApi} className="btn-search">
              Buscar personajes
            </button>
          </>
        )}
      </header>
    </div>
  );
}

export default App;