import { useState, createContext, useEffect } from "react";

export const MoviesContext = createContext();

const getFavs = JSON.parse(localStorage.getItem("myFavs"));

export const MoviesProvider = ({ children }) => {
  const [favs, setFavs] = useState(getFavs || []);

  useEffect(() => {
    localStorage.setItem("myFavs", JSON.stringify(favs));
  });

  const delFromFavs = (movie) => {
    setFavs(favs.filter((m) => m.id !== movie.id));
  };

  const addToFavs = (movie) => {
    setFavs((prevFavs) => {
      let found = favs.find((m) => m.id === movie.id);

      if (found) {
        return [...prevFavs];
      } else {
        return [...prevFavs, movie];
      }
    });
  };
  return (
    <MoviesContext.Provider value={{ favs, addToFavs, delFromFavs }}>
      {children}
    </MoviesContext.Provider>
  );
};
