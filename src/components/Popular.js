import React, { useEffect, useState } from "react";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import styled from "styled-components";

function Popular() {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    getRecipe();
  }, []);

  const getRecipe = async () => {
    const check = localStorage.getItem("popular");
    if (check) setPopular(JSON.parse(check));
    else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_RECIPE_API_KEY}&number=9`
      );
      const data = await api.json();
      localStorage.setItem('popular', JSON.stringify(data.recipes))
      console.log("data ::", data)
      setPopular(data.recipes);
    }
  };
  return (
    <Wrapper>
    <h3>Popular Picks</h3>
    <Splide options={{
      perPage: 4,
      arrows: false,
      pagination: false,
      drag: 'free',
      gap: "5rem",
    }} >
      {popular.map((recipe) => {
        return (<SplideSlide>
          <Card>
            <p>{recipe.title}</p>
            <img src={recipe.image} />
            {/* <Gradient /> */}
          </Card></SplideSlide>
        );
      })}
      </Splide>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin: 4rem 0rem;
`;

const Card = styled.div`
  min-height: 15rem;
  border-radius: 2rem;
  overflow: hidden;
  position: relative;

  img{
    position: absolute;
    border-radius: 2rem;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  p{
    position: absolute;
    z-index: 10;
    left: 50%;
    bottom: 50%;
    transform: translate(-50%, 0%);
    color: white;
    width: 100%;
    text-align: center;
    font-weight: 600;
    font-size: 1rem;
    height: 40%;
    display: flex;
    justify-contents: center;
    align-items: center;
  }
`;

const Gradient = styled.div`
  z-index: 3;
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.5));
`

export default Popular;
