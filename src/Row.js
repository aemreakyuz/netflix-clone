import React, { useEffect, useState } from "react";
import instance from "./utils/axios.js";
import "./Row.css";

const base_image_url = "https://image.tmdb.org/t/p/original";
const API_KEY = "2d556cfd56214c861b900b221a8b327d";

function Row({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await instance.get(fetchUrl);
      console.log(request);
      console.log(request.data.results);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  // console.log("movies", movies);
  //const poster_paths = movies.map((movie) => movie.poster_path);
  //console.log(poster_paths);
  return (
    <div className="row">
      <h1>{title}</h1>

      <div className="row__posters flex p-4 bg-black  ">
        {movies.map((movie) => (
          <img
            className="row__poster"
            key={movie.id}
            src={`${base_image_url}${movie.poster_path}`}
            alt={movie.name}
          />
        ))}
      </div>
    </div>
  );
}

export default Row;
