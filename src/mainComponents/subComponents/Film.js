import React, { useState, useContext, useEffect } from "react";

import { DataContext } from "../../DataContext";

export default function Film({ match }) {
  const { loading, films } = useContext(DataContext);
  const [film, setFilm] = useState(films[match.params.id - 1]);

  useEffect(() => {
    function check() {
      if (!film) {
        setTimeout(check(), 500);
      } else {
        return film;
      }
    }
  });

  return (
    <div>
      <h1>{film.title}</h1>
      <strong>Episode</strong>
      <p>{film.episode_id}</p>
      <strong>Opening crawl</strong>
      <p>{film.opening_crawl}</p>
      <strong>Producer</strong>
      <p>{film.producer}</p>
      <strong>Release date</strong>
      <p>{film.release_date}</p>
    </div>
  );
}
