import React, { useState, useContext, useEffect } from 'react';
import {DataContext} from '../../DataContext';
import { Card, Grid, Dimmer, Loader } from 'semantic-ui-react';

export default function Starship({ match }) {
  const {loading, starships} = useContext(DataContext);
  const [starship, setStarships] = useState(starships[match.params.id-1]);

  return (
        <>
          <h1>{starship.name}</h1>
          <strong>Model</strong>
          <p>{starship.model}</p>
          <strong>Starship class</strong>
          <p>{starship.starship_class}</p>
          <strong>MGLT</strong>
          <p>{starship.mglt}</p>
          <strong>Cargo capacity</strong>
          <p>{starship.cargo_capacity}</p>
          <strong>Consumables</strong>
          <p>{starship.consumables}</p>
          <strong>Cost in credits</strong>
          <p>{starship.cost_in_credits}</p>
          <strong>Crew</strong>
          <p>{starship.crew}</p>
          <strong>Hyperdrive rating</strong>
          <p>{starship.hyperdrive_rating}</p>
          <strong>Length</strong>
          <p>{starship.length}</p>
          <strong>Manufacturer</strong>
          <p>{starship.manufacturer}</p>
          <strong>Max atmosphere speed</strong>
          <p>{starship.max_atmosphere_speed}</p>
          <strong></strong>
          <p>{starship.length}</p>
          <strong>Length</strong>
          <p>{starship.length}</p>
          <strong>Passenger</strong>
          <p>{starship.passengers}</p>
    </>
  )
}
