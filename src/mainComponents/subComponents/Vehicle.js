import React, { useState, useContext, useEffect } from "react";

import { DataContext } from "../../DataContext";

export default function Vehicle({ match }) {
  const { loading, vehicles } = useContext(DataContext);
  const [vehicle, setVehicle] = useState(vehicles[match.params.id - 1]);

  useEffect(() => {
    function check() {
      if (!vehicle) {
        setTimeout(check(), 500);
      } else {
        return vehicle;
      }
    }
  });

  return (
    <>
      <h1>{vehicle.name}</h1>
      <strong>Vehicle class</strong>
      <p>{vehicle.vehicle_class}</p>
      <strong>Model</strong>
      <p>{vehicle.Model}</p>
      <strong>Crew</strong>
      <p>{vehicle.crew}</p>
      <strong>Passenger</strong>
      <p>{vehicle.passengers}</p>
      <strong>Cargo capacity</strong>
      <p>{vehicle.cargo_capacity}</p>
      <strong>Consumables</strong>
      <p>{vehicle.consumables}</p>
      <strong>Cost in credits</strong>
      <p>{vehicle.cost_in_credits}</p>
      <strong>Length</strong>
      <p>{vehicle.lenght}</p>
      <strong>Manufacturer</strong>
      <p>{vehicle.manufacturer}</p>
      <strong>Max atmosphering speed</strong>
      <p>{vehicle.max_atmosphering_speed}</p>
    </>
  );
}
