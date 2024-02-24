// aqui se tiene toda la informacion que viene desde la api
import React from "react";

export default function Characters(props) {
  const { characters, setCharacters } = props;//en props donde se almacenan los datos de los personajes tomados desde la api se le dice que tome los datos 

  const resetCharacters = () => {// funcion paera resetar la informacion y volver al inicio volviendo todo null
    setCharacters(null);
  };

  console.log(characters);

  return (
    <div className="characters">
      <h1>Personajes</h1>
      <span className="back-home" onClick={resetCharacters}>
        Volver a la home
      </span>
      <div className="container-characters">
        {characters.map((character, index) => (//mapeo de los personajes y se hace un return implicito, se recorre toda la informacion
        /* se toma la imagen y se le da el nombre del personaje, es un alt dinamico de tal manera que cada wue se muetsra da un nombre diferente a cada imagen , se troma la infromacio de si esta vivo o no dependiendo el estatus que da la api, aparte se toma la informacion de la cantidad de episodios donde aparecieron y la especie */
          <div className="character-container" key={index}>
            <div> 
              <img src={character.image} alt={character.name} />
            </div>
            <div>
              <h3>{character.name}</h3>
              <h6>
                {character.status === "Alive" ? (
                  <>
                    <span className="alive" />
                    Vivo
                  </>
                ) : (
                  <>
                    <span className="dead" />
                    Muerto
                  </>
                )}
              </h6>
              <p>
                <span className="text-grey">Episodios: </span>
                <span>{character.episode.length}</span>
              </p>
              <p>
                <span className="text-grey">Especie: </span>
                <span>{character.species}</span>
              </p>
            </div>
          </div>
        ))}
        
      </div>
      
      <span className="back-home" onClick={resetCharacters}>
        Volver al inicio
      </span>
      
    </div>
    /* cuando se le da volver al inicio se resetea la informacion tomada de la api y se */
  );
}
