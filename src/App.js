import Movies from './components/Movies';
import MoviesSearch from './components/MoviesSearch'
import './App.css';
import {useEffect,useState} from 'react';
import {Link} from 'react-router-dom'

function App() {
  const [movies, setMovies]=useState([]);
  const [query, setQuery]=useState('');

  const fetchMovies=()=>{
    const url='https://62a14788cc8c0118ef489613.mockapi.io/movies'

    fetch(url)
    .then((res)=>res.json())
    .then((data)=>{
      if(data) setMovies(data)
    })
  }

  useEffect(()=>{
    fetchMovies()
  })

  const search=(movies)=>{
    return movies.filter((m)=>{
      return m.Title.toLowerCase().includes(query.toLowerCase())
    })
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-6">
        <h3>Movies App</h3>
        </div>
        <div className="col-sm-6 text-end">
          <Link to='/favs'>Favs</Link>
        </div>
      </div>
      
      <div>
        <MoviesSearch setQuery={setQuery} />
      </div>
     
     <div className='row'>
       <Movies movies={search(movies)} />
     </div>
    </div>
  );
}

export default App;
