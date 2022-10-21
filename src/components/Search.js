import React from "react";
import styled from "styled-components";
import {useNavigate} from 'react-router-dom';

import {FaSearch} from "react-icons/fa";

function Search() {
  const navigate = useNavigate();

  const handleSearch = (event) =>{
    event.preventDefault();
    navigate(`/searched/${event.target.search.value}`)
    console.log(event.target.search.value);
  }
  return (
    <FormStyle onSubmit={handleSearch}>
      <div>
        <FaSearch />
        <input name="search" type="text" />
      </div>
    </FormStyle>
  );
}

const FormStyle = styled.form`
  margin: 0rem 15rem 0rem 8rem;

  div {
    width: 100%;
    position: relative;
  }

  input {
    border: none;
    background: linear-gradient(35deg, #494949, #313131);
    font-size: 1rem;
    color: white;
    padding: 1rem 3rem;
    border: none;
    border-radius: 1rem;
    outline: 1rem;
    width: 100%;
  }

  svg {
    position: absolute;
    top: 50%;
    left: 0%;
    transform: translate(100%, -50%);
    color: white;
  }
`;

export default Search;
