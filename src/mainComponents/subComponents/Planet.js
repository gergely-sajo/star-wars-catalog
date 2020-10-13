import React, { useState, useContext, useEffect } from "react";

import { DataContext } from "../../DataContext";

export default function Planet({ match }) {
  const { loading, planets } = useContext(DataContext);
  const [planet, setPlanet] = useState(planets[match.params.id - 1]);

  useEffect(() => {
    function check() {
      if (!planet) {
        setTimeout(check(), 500);
      } else {
        return planet;
      }
    }
  });

  console.log(planet);

  return (
    <>
      {!planet ? (
        <></>
      ) : (
        <>
          <h1>{planet.name}</h1>
          <strong>Climate</strong>
          <p>{planet.climate}</p>
          <strong>Diameter</strong>
          <p>{planet.diameter}</p>
          <strong>Gravity</strong>
          <p>{planet.gravity}</p>
          <strong>Orbital Period</strong>
          <p>{planet.orbital_period}</p>
          <strong>Population</strong>
          <p>{planet.population}</p>
          <strong>Rotation period</strong>
          <p>{planet.rotation_period}</p>
          <strong>Surface water</strong>
          <p>{planet.surface_water}</p>
          <strong>Terrain</strong>
          <p>{planet.terrain}</p>
        </>
      )}
    </>
  );
}
