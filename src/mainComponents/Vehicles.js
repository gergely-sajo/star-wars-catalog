import React, {useContext} from 'react'

import {DataContext} from '../DataContext';

import { Card, Grid, Dimmer, Loader } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default function Vehicles() {
  const {loading, vehicles} = useContext(DataContext);

  console.log(vehicles)

  return (
    <>
      {loading ? (
        <Dimmer active inverted>
          <Loader inverted>Loading</Loader>
        </Dimmer>
      ) : (
        <>
          <h1>Vehicles</h1>
          <Grid columns={3}>
            {vehicles.map((vehicle, i) => {
              return (
                <Grid.Column key={i}>
                  <Card>
                    <Card.Content>
                      <Card.Header>
                        <Link to={`/vehicles/${i+1}`}>{vehicle.name}</Link>
                      </Card.Header>
                      <Card.Description>
                        <strong>Vehicle class</strong>
                        <p>{vehicle.vehicle_class}</p>
                        <strong>Model</strong>
                        <p>{vehicle.model}</p>
                        <strong>Crew</strong>
                        <p>{vehicle.crew}</p>
                      </Card.Description>
                      </Card.Content>
                    </Card>
                  </Grid.Column>
                )
            })}
          </Grid>
        </>
      )}
    </>
  )
}
