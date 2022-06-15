import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FavoriteMovies from "./components/FavoriteMovies";
import { MoviesProvider } from "./components/context/MoviesContext";
import { PagesProvider } from "./components/context/PagesContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <MoviesProvider>
    <PagesProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/favs" element={<FavoriteMovies />} />
      </Routes>
    </BrowserRouter>
    </PagesProvider>
  </MoviesProvider>
);
