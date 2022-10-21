import React from 'react'

import {FaPizzaSlice, FaBreadSlice, FaHamburger} from "react-icons/fa";
import {GiChopsticks, GiNoodles} from "react-icons/gi";
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';

function Category() {
  return (
    <List>
        <SLink to={'/cuisine/Indian'}> 
            <FaBreadSlice />
            <h4>Indian</h4>
        </SLink>
        <SLink to={'/cuisine/Italian'}>
            <FaPizzaSlice />
            <h4>Italian</h4>
        </SLink>
        <SLink to={'/cuisine/American'}>
            <FaHamburger />
            <h4>American</h4>
        </SLink>
        <SLink to={'/cuisine/Thai'}>
            <GiNoodles />
            <h4>Thai</h4>
        </SLink>
    </List>
  )
}

const List = styled.div`
    display : flex;
    justify-content : center;
    align-items: center;
    margin: 2rem 0;
`

const SLink = styled(NavLink)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    flex-gap: 2rem;
    margin-right: 1rem;
    text-decoration: none;
    background: linear-gradient(35deg, #494949, #313131);
    cursor: pointer;
    height: 5rem;
    width: 5rem;
    transform: scale(0.8);
    h4{
        color: white;
        font-size: 0.8rem;
        margin: 0rem;
    }
    svg{
        color: white;
        font-size: 1.5rem;
    }
    &.active{
        background: linear-gradient(to right, #f27121, #e94057);
    }
`

export default Category;