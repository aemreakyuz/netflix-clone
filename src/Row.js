import React, { useEffect, useState } from "react";
import instance from "./utils/axios.js";

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

  console.log("movies", movies);

  return (
    <div className="row_container">
      <h1>{title}</h1>
      <div className="posters">posters</div>
    </div>
  );
}

export default Row;
