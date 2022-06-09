import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FavoriteMovies from "./components/FavoriteMovies";
import { MoviesProvider } from "./components/context/MoviesContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <MoviesProvider>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/favs" element={<FavoriteMovies />} />
    </Routes>
  </BrowserRouter>
  </MoviesProvider>
);
