import React, { useEffect, useState } from 'react';
import Axios from 'axios';

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!

    const getCharacters = () => {
      Axios
        .get('https://rickandmortyapi.com/api/character/')
      .then(response => {
        console.log(response.data.results)
        setCharacters(response.data.results)
      })
      .catch(error => {
        console.error(error)
      })
    }

    getCharacters();
  }, [])

  return (<section className='character-list grid-view'>

    <h2>Character List</h2>

    {characters.map(character => (
      <div key={character}>
        {character}
      </div>
    ))}

  </section>
  )
}
