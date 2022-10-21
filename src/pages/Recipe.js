import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import styled from "styled-components";

function Recipe() {
  const params = useParams()
  const [recipe, setRecipe] = useState({})
  const [activeTab, setActiveTab] = useState('instructions')

  const getRecipe = async id => {
    const api = await fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.REACT_APP_RECIPE_API_KEY}`)
    const data = await api.json();
    console.log("data::", data)
    // localStorage.setItem('selectedRecipe', JSON.stringify(data))
    setRecipe(data);
  }

  useEffect(() => {
    const check = localStorage.getItem('selectedRecipe');
    getRecipe(params.id)
  }, [params.id]);
  console.log(recipe)
  return <><DetailedRapper>
    <div>
      <h2>{recipe.title }</h2>
      <img src={recipe.image} />
    </div>
      <Info>
        <Button onClick={()=>setActiveTab('instructions')} className={activeTab === 'instructions' ? 'active' : ''} >Instructions</Button>
        <Button onClick={()=>setActiveTab('ingredients')} className={activeTab === 'ingredients' ? 'active' : ''}>Ingredients</Button>
        {activeTab === 'instructions' ? <><div>
        <h3 dangerouslySetInnerHTML={{ __html : recipe.summary }} ></h3>
      </div>
      <div>
        <h3 dangerouslySetInnerHTML={{ __html : recipe.instructions }} ></h3>
      </div></> : <ul>{recipe.extendedIngredients.map(ing => <li>{ing.name} : {ing.amount.toFixed(2)} {ing.unit}</li> )}</ul>}
      </Info>
  </DetailedRapper></>;
}

const DetailedRapper = styled.div`
  margin-top: 5rem;
  margin-bottom: 5rem;
  display: flex;
  .active{
    background: linear-gradient(35deg, #494949, #313131);
    color: white;
    }
  h2{
    margin-bottom: 2rem;
    font-size: 1.2rem;
  }
  li{
    font-size: 1.2rem;
    line-height: 2.5rem;
  }
  ul{
    margin-top: 2rem;
  }

`

const Button = styled.button`
  padding: 1rem 2rem;
  color: #313131;
  background: white;
  border: 2px solid black;
  margin-right: 2rem;
  font-weight: 600;
`;

const Info = styled.div`
  margin-left : 6rem;
`

export default Recipe;
