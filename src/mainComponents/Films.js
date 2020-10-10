import React, { useContext } from 'react';

import {DataContext} from '../DataContext';

import { Card, Grid, Dimmer, Loader } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default function Films () {
  const {loading, films} = useContext(DataContext)

  return (
    <>
      {loading ? (
        <Dimmer active inverted>
          <Loader inverted>Loading</Loader>
        </Dimmer>
      ) : (
        <>
          <h1>Films</h1>
          <Grid columns={3}>
            {films.map((film, i) => {
              return (
                <Grid.Column key={i}>
                  <Card>
                    <Card.Content>
                      <Card.Header>
                        <Link to={`/films/${i+1}`}>{film.title}</Link>
                      </Card.Header>
                      <Card.Description>
                        <strong>Episode</strong>
                        <p>{film.episode_id}</p>
                        <strong>Release date</strong>
                        <p>{film.release_date}</p>
                        <strong>Director</strong>
                        <p>{film.director}</p>
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
