import React, { useContext } from "react";
import { MoviesContext } from "./context/MoviesContext";
import { Link } from "react-router-dom";

function Movie({ movie }) {
  const { delFromFavs } = useContext(MoviesContext);
  return (
    <div className="card">
      <img alt={movie.Title} src={movie.Poster} className="card-img-top" />

      <div className="card-body">
        <p>{movie.Title}</p>
        <p>{movie.Year}</p>
        <p>
          <button className="btn btn-danger" onClick={() => delFromFavs(movie)}>
            Remove from Favs
          </button>
        </p>
      </div>
    </div>
  );
}

function FavoriteMovies() {
  const { favs, setFavs } = useContext(MoviesContext);
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <h3>Fav movies</h3>
          </div>
          <div className="col-sm-6 text-end">
            <Link to="/">Home</Link>
          </div>
        </div>

        <div className="row">
          {favs.length === 0 && <p>You do not have fav movies yet</p>}

          {favs.map((movie, index) => (
            <div className="col-md-3 mb-4" key={index}>
              <Movie movie={movie} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default FavoriteMovies;
