import {useState,createContext } from 'react'

export const MoviesContext=createContext() 

export const MoviesProvider=({children})=>{
const [favs,setFavs] =useState([])

const delFromFavs=(movie)=>{
setFavs(favs.filter((m)=>m.id!==movie.id))
}

const addToFavs=(movie)=>{
    setFavs((prevFavs)=>{
        let found=favs.find((m)=>m.id===movie.id);

        if(found) {
            return [...prevFavs];
        } else {
            return [...prevFavs, movie];
        }
    });
};
    return <MoviesContext.Provider value={{favs, addToFavs, delFromFavs}}>
        {children}
    </MoviesContext.Provider>
}