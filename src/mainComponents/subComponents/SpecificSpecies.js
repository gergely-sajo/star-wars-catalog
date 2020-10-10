import React, {useState, useContext} from 'react';

import {DataContext} from '../../DataContext';

export default function SpecificSpecies({ match }) {
  const {loading, species} = useContext(DataContext);
  const [specificSpecies, setSpecificSpecies] = useState(species[match.params.id-1]);

  return (
    <div>
      <h1>{specificSpecies.name}</h1>
      <strong>Classification</strong>
      <p>{specificSpecies.classification}</p>
      <strong>Designation</strong>
      <p>{specificSpecies.designation}</p>
      <strong>Language</strong>
      <p>{specificSpecies.language}</p>
      <strong>Average height</strong>
      <p>{specificSpecies.average_height}</p>
      <strong>Average lifespan</strong>
      <p>{specificSpecies.average_lifespan}</p>
      <strong>Eye colors</strong>
      <p>{specificSpecies.eye_colors}</p>
      <strong>Hair colors</strong>
      <p>{specificSpecies.hair_colors}</p>
      <strong>Skin color</strong>
      <p>{specificSpecies.skin_colors}</p>
    </div>
  )
}
