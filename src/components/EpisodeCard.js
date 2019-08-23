import React from 'react'
import styled from 'styled-components'

const EpiCard = styled.div`
  background-color: lightgrey;
  border: 2px black solid;
  margin: 10px;
  padding: 10px;
`;

export default function EpisodeCard({ episode }) {
  return (
    <EpiCard>
      <h3>Episode Number: {episode.episode}</h3>
      <p>Episode Title: {episode.name}</p>
      <p>Air Date: {episode.air_date}</p>

    </EpiCard>
  )
}