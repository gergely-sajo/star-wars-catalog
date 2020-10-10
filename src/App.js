import React, { useState, useContext } from 'react';

import {DataProvider} from './DataContext';
import {DataContext} from './DataContext';

import Home from './mainComponents/Home';
import Nav from './mainComponents/Nav';
import People from './mainComponents/People';
import Planets from './mainComponents/Planets';
import Films from './mainComponents/Films';
import Film from './mainComponents/subComponents/Film';
import Planet from './mainComponents/subComponents/Planet';
import Person from './mainComponents/subComponents/Person';
import Species from './mainComponents/Species';
import SpecificSpecies from './mainComponents/subComponents/SpecificSpecies';
import Starships from './mainComponents/Starships';
import Starship from './mainComponents/subComponents/Starship';
import Vehicles from './mainComponents/Vehicles';
import Vehicle from './mainComponents/subComponents/Vehicle';

import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { Container, Dimmer, Loader } from 'semantic-ui-react';

import './App.css';

function App() {
  const loading = useContext(DataContext);

  console.log()

  return (
    <DataProvider>
      <Router>
        <Nav />
        <Container>
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>

            <Route exact path='/people'>
              <People />
            </Route>
            
            <Route path={`/people/:id`} component={Person}/>

            <Route exact path='/planets'>
              <Planets />
            </Route>
            <Route path={`/planets/:id`} component={Planet} />

            <Route exact path='/films'>
              <Films />
            </Route>
            <Route path={`/films/:id`} component={Film} />

            <Route exact path='/species'>
              <Species />
            </Route>
            <Route path={`/species/:id`} component={SpecificSpecies}/>

            <Route exact path='/starships'>
              <Starships />
            </Route>
            <Route path={`/starships/:id`} component={Starship}/>

            <Route exact path='/vehicles'>
              <Vehicles />
            </Route>
            <Route path={`/vehicles/:id`} component={Vehicle}/>

          </Switch>
        </Container>
      </Router>
    </DataProvider>
  )
}

export default App
