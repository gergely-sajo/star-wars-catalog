import React, {useContext} from 'react'

import {DataContext} from '../DataContext';

import { Card, Grid, Dimmer, Loader } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default function Planets() {
  const {loading, planets} = useContext(DataContext);

  return (
    <>
      {loading ? (
        <Dimmer active inverted>
          <Loader inverted>Loading</Loader>
        </Dimmer>
      ) : (
          <>
          <h1>Planets</h1>
          <Grid columns={3}>
            {planets.map((planet, i) => {
              return (
                <Grid.Column key={i}>
                  <Card>
                    <Card.Content>
                      <Card.Header>
                        <Link to={`/planets/${i+1}`}>{planet.name}</Link>
                      </Card.Header>
                      <Card.Description>
                        <strong>Climate</strong>
                        <p>{planet.climate}</p>
                        <strong>Diameter</strong>
                        <p>{planet.diameter}</p>
                        <strong>Population</strong>
                        <p>{planet.population}</p>
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
