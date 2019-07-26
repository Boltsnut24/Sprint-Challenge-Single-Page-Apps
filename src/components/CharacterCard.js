import React from 'react'

export default function CharacterCard({character}) {
  return (
    <div>
      <img src={character.image} />
      <h3>Name: {character.name}</h3>
      <ul>
        <li>Species: {character.species}</li>
        <li>Gender: {character.gender}</li>
        <li>Status: {character.status}</li>
      </ul>
    </div>
  )
}
