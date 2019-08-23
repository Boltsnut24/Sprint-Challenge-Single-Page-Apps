import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import EpisodeCard from './EpisodeCard.js'

export default function EpisodeList() {
  const [episodes, setEpisodes] = useState([])

  useEffect(() => {
    const getEpisodes = () => {
      Axios
        .get('https://rickandmortyapi.com/api/episode/')
        .then(response => {
          console.log('Episodes:', response.data.results)
          setEpisodes(response.data.results)
        })
        .catch(err => {
          console.error(err)
        })
    }

    getEpisodes();
  }, [])
  return (<section className='character-list grid-view'>

    {episodes.map(episode => (
      <EpisodeCard key={episode.id} episode={episode} />
    ))}

  </section>
  );
}