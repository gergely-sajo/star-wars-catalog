import React, { useContext } from 'react'

import {DataContext} from '../DataContext';

import { Card, Grid, Dimmer, Loader } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default function People() {
  const {loading, people} = useContext(DataContext);

  return (
    <>
      {loading ? (
        <Dimmer active inverted>
          <Loader inverted>Loading</Loader>
        </Dimmer>
      ) : (
        <>
          <h1>People</h1>
          <Grid columns={3}>
            {people.map((person, i) => {
              return (
                <Grid.Column key={i}>
                  <Card>
                    <Card.Content>
                      <Card.Header>
                        <Link to={`/people/${i+1}`}>{person.name}</Link>
                      </Card.Header>
                      <Card.Description>
                        <strong>Height</strong>
                        <p>{person.height}</p>
                        <strong>Mass</strong>
                        <p>{person.mass}</p>
                        <strong>Hair Color</strong>
                        <p>{person.hair_color}</p>
                      </Card.Description>
                    </Card.Content>
                  </Card>
                </Grid.Column>
              )
            })}
          </Grid>
        </>
      ) }
    </>
  )
}
