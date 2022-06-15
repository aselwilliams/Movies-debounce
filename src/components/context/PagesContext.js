import {useState, useEffect, createContext} from 'react';

export const PagesContext= createContext();

export const PagesProvider = ({children}) => {
    const [movies, setMovies]=useState([]);
    const [currentPage, setCurrentPage] =useState(1);
    const [itemsPerPage, setItemsPerPage]=useState(8);
  
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
    },[])
  
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentMovies = movies.slice(indexOfFirstItem, indexOfLastItem)
  
    const changePage=(page)=>{
      console.log(page)
      setCurrentPage(page)
    }
  

    return(
        <PagesContext.Provider value={{currentPage, itemsPerPage, currentMovies, changePage, movies}}>
            {children}
        </PagesContext.Provider>
    )
}