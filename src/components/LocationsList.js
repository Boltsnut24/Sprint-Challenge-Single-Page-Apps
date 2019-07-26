import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import LocationCard from './LocationCard.js'

export default function LocationsList() {
  const [locations, setLocations] = useState([]);

  useEffect(() => {

    const getLocation = () => {
      Axios
        .get('https://rickandmortyapi.com/api/location/')
      .then(response => {
        console.log('locations:', response.data.results)
        setLocations(response.data.results)
      })
      .catch(error => {
        console.error(error)
      })
    }

    getLocation();
  }, [])

  return (<section className='character-list grid-view'>

    {locations.map(location => (
      <LocationCard key = {location.id} location = {location}/>
    ))}

  </section>
  )
}
