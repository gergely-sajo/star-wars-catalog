import React, { useState, createContext, useEffect } from 'react';

export const DataContext = createContext();

export const DataProvider = (props) => {
  const [people, setPeople] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [films, setFilms] = useState([]);
  const [species, setSpecies] = useState([]);
  const [starships, setStarships] = useState([]);
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchPeople = async () => {
    let urls = [];
    for (let i = 1; i < 10; i++) {
      urls.push(`https://swapi.dev/api/people?page=${i}`)
    }
    
    let result = await Promise.all(urls.map((url) => fetch(url).then(resp => resp.json())));

    let data = [];
    for (let i = 0; i < 9; i++) {
      data.push(result[i].results)
    }

    setPeople(data.flat())
    setLoading(false)
  }

  const fetchPlanets = async () => {
    let urls = [];
    for (let i = 1; i < 7; i++) {
      urls.push(`https://swapi.dev/api/planets?page=${i}`)
    }

    let result = await Promise.all(urls.map((url) => fetch(url).then(resp => resp.json())))

    let data = [];
    for (let i = 0; i < 6; i++) {
      data.push(result[i].results)
    }

    setPlanets(data.flat())
    setLoading(false)
  }

  const fetchFilms = async () => {
    let result = await fetch('https://swapi.dev/api/films');
    let data = await result.json();
    setFilms(data.results)
    setLoading(false)
  }

  const fetchSpecies = async () => {
    let urls = [];
    for (let i = 1; i < 5; i++) {
      urls.push(`https://swapi.dev/api/species?page=${i}`)
    }

    let result = await Promise.all(urls.map((url) => fetch(url).then(resp => resp.json())));

    let data = [];
    for (let i = 0; i < 4; i++) {
      data.push(result[i].results)
    }

    setSpecies(data.flat())
    setLoading(false)
  }

  const fetchStarships = async () => {
    let urls = [];
    for (let i = 1; i < 5; i++) {
      urls.push(`https://swapi.dev/api/starships?page=${i}`)
    }

    let result = await Promise.all(urls.map((url) => fetch(url).then(resp => resp.json())))

    let data = []
    for (let i = 0; i < 4; i++) {
      data.push(result[i].results)
    }

    setStarships(data.flat())
    setLoading(false)
  }

  const fetchVehicles = async () => {
    let urls = [];
    for (let i = 1; i < 5; i++) {
      urls.push(`https://swapi.dev/api/vehicles?page=${i}`)
    }

    let result = await Promise.all(urls.map((url) => fetch(url).then(resp => resp.json())))

    let data = []
    for (let i = 0; i < 4; i++) {
      data.push(result[i].results)
    }

    setVehicles(data.flat())
    setLoading(false)
  }

  useEffect(() => {
    fetchPeople();
    fetchPlanets();
    fetchFilms();
    fetchSpecies();
    fetchStarships();
    fetchVehicles();
  }, [])

  return (
    <DataContext.Provider
      value={{
        loading: loading,
        people: people,
        planets: planets,
        films: films,
        species: species,
        starships: starships,
        vehicles: vehicles
      }}
      >
        {props.children}
    </DataContext.Provider>
  );
}