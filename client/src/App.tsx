import React, { useEffect, useState } from "react";
import "./App.css";
import { IMovie } from "./types";
import axios from "axios";
import { Card } from "./components/Card";
import styled from "styled-components";
import { SearchBar } from "./components";
import Pagination from "./components/Pagination";

const apiUrl = "http://localhost:8080/movies";

const AppContainer = styled.div`
  margin-inline: auto;
  max-width: 1140px;
  padding-inline: 1rem;
  margin-block: 80px;
`;

const CardList = styled.div<{ $container?: boolean }>`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2rem 1rem;
  margin-top: 80px;
`;

const Alert = styled.h2`
  text-align: center;
  font-size: 20px;
  color: #000;
  margin-top: 48px;
`;

function App() {
  const itemsPerPage = 9;
  const searchParams = new URLSearchParams(window.location.search);
  const [currentPage, setCurrentPage] = useState(searchParams.get("page") ? Number(searchParams.get("page")) : 1);
  const [initialMovies, setInitialMovies] = useState<IMovie[]>([]);
  const [initialMoviesLoaded, setInitialMoviesLoaded] = useState(false);
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [error, setError] = useState("");
  const [input, setInput] = useState(searchParams.get("search") || "");

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
    if (!input) return setMovies(initialMovies);
    const newMovies = initialMovies.filter((movie) => {
      return movie.title.toLowerCase().includes(input.toLowerCase());
    });
    setMovies(newMovies);
    if (currentPage !== 1) setCurrentPage(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [input, initialMoviesLoaded]);

  useEffect(() => {
    const updatedParams = new URLSearchParams();
    updatedParams.set("page", currentPage.toString());
    if (input) updatedParams.set("search", input);
    else updatedParams.delete("search");
    window.history.pushState({}, "", "?" + updatedParams.toString());
  }, [currentPage, input]);

  return (
    <AppContainer>
      {error ? (
        <Alert>{error}</Alert>
      ) : (
        <>
          <SearchBar onSearch={setInput}></SearchBar>
          {initialMoviesLoaded && (
            <>
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
                <Alert>No Results</Alert>
              )}
            </>
          )}
        </>
      )}
    </AppContainer>
  );
}

export default App;
