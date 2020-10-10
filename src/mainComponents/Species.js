import React, { useContext } from 'react'

import {DataContext} from '../DataContext';

import { Card, Grid, Dimmer, Loader } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default function Species () {
  const {loading, species} = useContext(DataContext)

  return (
    <>
      {loading ? (
        <Dimmer active inverted>
          <Loader inverted>Loading</Loader>
        </Dimmer>
        ) : (
        <>
          <h1>Species</h1>
          <Grid columns={3}>
            {species.map((species, i) => {
              return (
                <Grid.Column key={i}>
                  <Card>
                    <Card.Content>
                      <Card.Header>
                        <Link to={`/species/${i+1}`}>{species.name}</Link>
                      </Card.Header>
                      <Card.Description>
                        <strong>Classification</strong>
                        <p>{species.classification}</p>
                        <strong>Designation</strong>
                        <p>{species.designation}</p>
                        <strong>Language</strong>
                        <p>{species.language}</p>
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
