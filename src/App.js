import Movies from './components/Movies';
import MoviesSearch from './components/MoviesSearch'
import './App.css';
import {useContext,useState} from 'react';
import {Link} from 'react-router-dom'
import Paginate from './components/Paginate';
import { PagesContext } from './components/context/PagesContext';

function App() {
  const [query, setQuery]=useState('');
  const {movies, currentMovies} = useContext(PagesContext)

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
     <div>
       <Paginate />
     </div>

     <div className='row'>
       <Movies movies={search(currentMovies)} />
     </div>
    </div>
  );
}

export default App;
