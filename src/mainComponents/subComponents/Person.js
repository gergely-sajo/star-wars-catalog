import React, { useState, useContext } from 'react';

import {DataContext} from '../../DataContext';

export default function Person({ match }) {
  const {loading, people, planets} = useContext(DataContext);
  const [person, setPerson] = useState(people[match.params.id-1]);
  const [planet, setPlanet] = useState(planets[person.homeworld.charAt(person.homeworld.length-2)-1])

  return (
    <>
      <h1>{person.name}</h1>
      <strong>Birth Year</strong>
      <p>{person.birth_year}</p>
      <strong>Eye color</strong>
      <p>{person.eye_color}</p>
      <strong>Gender</strong>
      <p>{person.gender}</p>
      <strong>Hair color</strong>
      <p>{person.hair_color}</p>
      <strong>Height</strong>
      <p>{person.height}</p>
      <strong>Homeworld</strong>
      <p>{planet.name}</p>
      <strong>Weight</strong>
      <p>{person.mass}</p>
      <strong>Skin color</strong>
      <p>{person.skin_color}</p>
    </>
  )
}
