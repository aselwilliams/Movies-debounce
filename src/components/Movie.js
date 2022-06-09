import React, { useContext } from 'react'
import { MoviesContext } from './context/MoviesContext'

function Movie({movie}) {
    const {addToFavs} =useContext(MoviesContext)
  return (
    <div className='card'>
        <img alt={movie.Title} src={movie.Poster} className='card-img-top'/>

        <div className='card-body'>
            <p>{movie.Title}</p>
            <p>{movie.Year}</p>
            <p>
                <button className='btn btn-success' onClick={()=>addToFavs(movie)}>Add to Favs</button>
            </p>
        </div>
    </div>
  )
}

export default Movie