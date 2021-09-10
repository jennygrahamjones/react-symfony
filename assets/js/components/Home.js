import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  text-align: center;
  font-size: 10px;
  font-smooth: never;
  -webkit-font-smoothing: none;
  font-family: "pokemon-font", monospace;
`;

const Pokemon = styled.div`
  filter: grayscale(100%);
`;

const Home = () => {
  const getPokemon = () => {
    let random = Math.floor(Math.random() * 151) + 1;

    axios.get(`http://localhost:8000/api/pokemon/${random}`).then((p) => {
      setPokemon(p.data);
    });
  };

  const [pokemon, setPokemon] = useState();

  useEffect(() => {
    getPokemon();
  }, []);

  const move = pokemon?.moves.at(
    Math.floor(Math.random() * pokemon.moves.length)
  );

  return (
    <Container>
      {pokemon && (
        <Pokemon>
          <img src={pokemon.sprites?.front_default} />
          <p>
            A wild {pokemon.name?.toUpperCase()} appeared! It used{" "}
            {move.move.name.replace("-", " ").toUpperCase()}!
          </p>
        </Pokemon>
      )}
    </Container>
  );
};

export default Home;
