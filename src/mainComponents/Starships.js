import React, { useContext } from 'react';

import {DataContext} from '../DataContext';

import { Card, Grid, Dimmer, Loader } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default function Starships() {
  const {loading, starships} = useContext(DataContext);
  console.log(starships)

  return (
    <>
      {loading ? (
        <Dimmer active inverted>
          <Loader inverted>Loading</Loader>
        </Dimmer>
      ) : (
        <>
          <h1>Starships</h1>
          <Grid columns={3}>
            {starships.map((starship, i) => {
              return (
                <Grid.Column key={i}>
                  <Card>
                    <Card.Content>
                      <Card.Header>
                        <Link to={`/starships/${i+1}`}>{starship.name}</Link>
                      </Card.Header>
                      <Card.Description>
                        <strong>Model</strong>
                        <p>{starship.model}</p>
                        <strong>Starship class</strong>
                        <p>{starship.starship_class}</p>
                        <strong>Crew</strong>
                        <p>{starship.crew}</p>
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
