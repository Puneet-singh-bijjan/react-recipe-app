import { BrowserRouter, Link } from "react-router-dom";

import Pages from "./pages/pages";
import Category from "./components/Category";
import Search from "./components/Search";
import styled from "styled-components";
import {GiKnifeFork} from "react-icons/gi";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav>
        <Logo to={'/'} >
          <GiKnifeFork />Delicious
        </Logo>
      </Nav>
        <Search />
        <Category />
        <Pages />
      </BrowserRouter>
    </div>
  );
}

const Logo = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 400;
  font: 'Lobster Two', cursive;
`;

const Nav = styled.div`
  padding: 4rem 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  svg{
    font-size: 2rem;
    ${'' /* color: #313131 */}
  }
`

export default App;
