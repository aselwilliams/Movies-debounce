import React from 'react';
import Movie from './Movie';

function Movies({movies}) {

  return (
    <>
        {movies.map((movie,index)=>(
          <div className='col-md-3 mb-4' key={index}>
              <Movie movie={movie} />
          </div>
        ))}
    </>
  )
}

export default Movies