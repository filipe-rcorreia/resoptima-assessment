import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { IMovie } from "./types";
import axios from "axios";
import { Card } from "./components/Card";
import styled, { css } from "styled-components";

const apiUrl = "http://localhost:8080/movies";

const AppContainer = styled.div`
  margin-inline: auto;
  max-width: 1366px;
  padding-inline: 1rem;
`;

const CardList = styled.div<{ $container?: boolean }>`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem;
`;

function App() {
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    axios
      .get<IMovie[]>(apiUrl)
      .then((response) => {
        setMovies(response.data);
      })
      .catch((error) => {
        setError(error.message);
      });
  }, []);

  return (
    <AppContainer>
      {error ? (
        <div>{error}</div>
      ) : (
        <>
          <div></div>
          <CardList>
            {movies.map((movie, index) => {
              return <Card key={index} {...movie} coverImage="https://picsum.photos/500/400" /*Not working anymore*/ />;
            })}
          </CardList>
        </>
      )}
    </AppContainer>
  );
}

export default App;
