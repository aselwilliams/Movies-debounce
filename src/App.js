import Movies from './components/Movies';
import MoviesSearch from './components/MoviesSearch'
import './App.css';
import {useEffect,useState} from 'react';
import {Link} from 'react-router-dom'
import Paginate from './components/Paginate'

function App() {
  const [movies, setMovies]=useState([]);
  const [query, setQuery]=useState('');
  const [currentPage,setCurrentPage] =useState(1);
  const [itemsPerPage,setItemsPerPage]=useState(8);

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

  //Get current movies
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentMovies = movies.slice(indexOfFirstItem, indexOfLastItem)

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
       <Paginate currentPage={currentPage} itemsPerPage={itemsPerPage} />
     </div>

     <div className='row'>
       <Movies currentMovies={search(currentMovies)} />
     </div>
    </div>
  );
}

export default App;
