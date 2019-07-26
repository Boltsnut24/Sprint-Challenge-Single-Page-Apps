import React from 'react'

export default function LocationCard ({location}) {

  return (
    <div>
      <h3>Name: {location.name}</h3>
      <p>Dimension: {location.dimension}</p>
      <p>Type: {location.type}</p>
      <p>Number of residents: {location.residents.length}</p>
    </div>
  )
}
