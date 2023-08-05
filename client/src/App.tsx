import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { IMovie } from "./types";
import axios from "axios";
import { Card } from "./components/Card";
import styled, { css } from "styled-components";
import { SearchBar } from "./components";
import Pagination from "./components/Pagination";

const apiUrl = "http://localhost:8080/movies";

const AppContainer = styled.div`
  margin-inline: auto;
  max-width: 1366px;
  padding-inline: 1rem;
  margin-block: 80px;
`;

const CardList = styled.div<{ $container?: boolean }>`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem;
  margin-top: 48px;
`;

const NoResults = styled.h2`
  text-align: center;
  font-size: 20px;
  color: #000;
  margin-top: 48px;
`;

function App() {
  const itemsPerPage = 9;
  const [currentPage, setCurrentPage] = useState(1);
  const [initialMovies, setInitialMovies] = useState<IMovie[]>([]);
  const [initialMoviesLoaded, setInitialMoviesLoaded] = useState(false);
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [error, setError] = useState("");
  const [input, setInput] = useState("");

  useEffect(() => {
    axios
      .get<IMovie[]>(apiUrl)
      .then((response) => {
        setInitialMovies(response.data);
        setInitialMoviesLoaded(true);
      })
      .catch((error) => {
        setError(error.message);
      });
  }, []);

  useEffect(() => {
    if (!initialMoviesLoaded) return;
    if (!input) return setMovies(initialMovies);
    const newMovies = initialMovies.filter((movie) => {
      return movie.title.toLowerCase().includes(input.toLowerCase());
    });
    setMovies(newMovies);
    if (currentPage !== 1) setCurrentPage(1);
  }, [input, initialMoviesLoaded]);

  return (
    <AppContainer>
      {error ? (
        <div>{error}</div>
      ) : (
        <>
          <SearchBar onSearch={setInput}></SearchBar>

          {movies.length > 0 ? (
            <>
              <CardList>
                {movies.slice((currentPage - 1) * itemsPerPage, (currentPage - 1) * itemsPerPage + itemsPerPage).map((movie, index) => {
                  return <Card key={index} {...movie} coverImage="https://picsum.photos/500/400" /*Not working anymore*/ />;
                })}
              </CardList>
              <Pagination totalItems={movies.length} itemsPerPage={itemsPerPage} currentPage={currentPage} onPageChange={setCurrentPage} />
            </>
          ) : (
            <NoResults>No Results</NoResults>
          )}
        </>
      )}
    </AppContainer>
  );
}

export default App;
