import React, { useState, useEffect } from 'react'
import { Link, useParams } from "react-router-dom"

import Spinner from "../../components/Spinner"

import api from "../../services/api"
import "./styles.css"

export default function RecipeList() {
  const { category } = useParams()
  const [ recipes, setRecipes ] = useState([])
  const [ loading, setLoading ] = useState(true)

  useEffect(() => {
    async function loadPages() {
      const resp = await api.get(`/filter.php?c=${category}`)
      setRecipes(resp.data.meals)
      setLoading(false)
    }
    loadPages()
  }, [])

  return (
    <main>
      <h2 className="category-subtitle">{category} Recipes</h2>
      <hr/>
      { loading ? <Spinner /> : (
        <ul id="recipes">
          {recipes.map(recipe => (
            <div className="recipe-preview" key={recipe.idMeal}>
              <Link to={`/categories/${category}/${recipe.idMeal}`}>
                <img src={recipe.strMealThumb} alt=""/>
                <p className="recipe-title">{recipe.strMeal}</p>
              </Link>
            </div>
          ))}
        </ul>
      )}
    </main>
  );
}
