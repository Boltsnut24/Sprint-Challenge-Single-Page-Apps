import React from 'react'
import styled from 'styled-components';

const CharCard = styled.div`
  background-color: teal;
  border: 2px black solid;
  margin: 10px;
`;

const AttributeList = styled.ul`
  background-color: white;
  border: 1px black solid;
  border-radius: 5px;
  margin: 5% 10%;
`;

const NamePlate = styled.h3`
  margin: auto;
  font-size: 1.5em;
  text-align: center;
`;

export default function CharacterCard({character}) {
  return (
    <CharCard>
      <img src={character.image} />
      <NamePlate>Name: {character.name}</NamePlate>
      <AttributeList>
        <li>Species: {character.species}</li>
        <li>Gender: {character.gender}</li>
        <li>Status: {character.status}</li>
      </AttributeList>
    </CharCard>
  )
}
