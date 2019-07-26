import React from 'react'
import styled from 'styled-components'

export default function LocationCard ({location}) {
  const LocCard = styled.div`
  background-color: lightgrey;
  border: 2px black solid;
  margin: 10px;
  padding: 10px;
`;

  const Residents = styled.div`
  margin-bottom: 0%;
  margin-left: 0%;
  background-color: teal;
  border: 1px black solid;
  font-weight: bold;
  `;

  return (
    <LocCard>
      <h3>Name: {location.name}</h3>
      <p>Dimension: {location.dimension}</p>
      <p>Type: {location.type}</p>
      <Residents>
        <p>Number of residents: {location.residents.length}</p>
      </Residents>
    </LocCard>
  )
}
