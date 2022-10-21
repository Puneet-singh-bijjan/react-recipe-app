import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

import styled from "../utils/StyledFiles";

function Veggie() {
  const [veggie, setVeggie] = useState([]);

  useEffect(() => {
    getVeggie();
  }, []);

  const getVeggie = async () => {
    const check = localStorage.getItem("veggie");
    // if (check) setVeggie(JSON.parse(check));

    const api = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_RECIPE_API_KEY}&number=9&tags=vegetarian`
    );
    const data = await api.json();
    // localStorage.setItem('veggie', JSON.stringify(data.recipes))
    console.log("data ::", data);
    setVeggie(data.recipes);
  };
  return (
    <styled.Wrapper
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h3>Vegetarian</h3>
      <Splide
        options={{
          perPage: 3,
          arrows: false,
          pagination: false,
          drag: "free",
          gap: "5rem",
        }}
      >
        {veggie.map((recipe) => {
          return (
            <SplideSlide>
              <styled.Card>
                <Link
                  to={{
                    pathname: `/recipe/${recipe.id}`,
                    state: { recipe: true },
                  }}
                >
                  <p>{recipe.title}</p>
                  <img src={recipe.image} />
                  <styled.Gradient />
                </Link>
              </styled.Card>
            </SplideSlide>
          );
        })}
      </Splide>
    </styled.Wrapper>
  );
}

export default Veggie;
