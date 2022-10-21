import { useParams, Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

function Searched() {
  const [search, setSearch] = useState([]);
  const params = useParams();
  const navigate = useNavigate()

  const getSearch = async (search) => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_RECIPE_API_KEY}&number=9&query=${search}`
    );
    const data = await api.json();
    // localStorage.setItem('search', JSON.stringify(data.results))
    if(data.results.length === 0) navigate('/searched/nofound')
    setSearch(data.results);
    console.log("data ::", data.results);
  };

  useEffect(() => {
    // const check = localStorage.getItem('search');
    getSearch(params.search);
    console.log(params.search);
  }, []);

  return (
    <Grid
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {search.map((item) => {
        return (
          <Card key={item.id}>
            <Link to={{ pathname: `/recipe/${item.id}` }}>
              <img src={item.image} />
              <h4>{item.title}</h4>
            </Link>
          </Card>
        );
      })}
    </Grid>
  );
}
const Grid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  grid-gap: 3rem;
`;

const Card = styled.div`
  img {
    width: 100%;
    border-radius: 2rem;
  }
  a {
    text-decoration: none;
  }
  h4 {
    text-align: center;
    padding: 1rem;
  }
`;

export default Searched;
