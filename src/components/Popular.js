import React, { useEffect, useState } from "react";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

import styled from '../utils/StyledFiles'

function Popular() {
  console.log(styled)
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
    <styled.Wrapper>
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
          <styled.Card>
            <p>{recipe.title}</p>
            <img src={recipe.image} />
            <styled.Gradient />
          </styled.Card></SplideSlide>
        );
      })}
      </Splide>
    </styled.Wrapper>
  );
}



export default Popular;
