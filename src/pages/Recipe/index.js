import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"

import Spinner from "../../components/Spinner"

import api from "../../services/api"
import "./styles.css"

function genIngredientIndex() {
  let arr = []

  for (let c = 1; c <= 20; c++) {
    arr.push(c)
  }

  return arr
}

export default function Recipe() {
  const { id } = useParams()
  const [ recipe, setRecipe ] = useState([])
  const [ loading, setLoading ] = useState(true)

  useEffect(() => {
    async function loadRecipe() {
      const resp = await api.get(`/lookup.php?i=${id}`)
      setRecipe(resp.data.meals)
      setLoading(false)
    }

    loadRecipe()
  }, [])

  return (
    <main>
      {loading ? <Spinner /> : recipe.map(rec => (
        <div className="recipe" key={rec.strMeal}>
          <h2 className="recipe-name">{rec.strMeal}</h2>
          <hr/>
          <h2 className="ingredients-title">Ingredients</h2>
          
          <div className="ingredients-box">
            <img className="recipe-photo" src={rec.strMealThumb} alt=""/>
            <ul className="ingredients">
              {genIngredientIndex()
                .filter(i => rec[`strIngredient${i}`] !== "" && rec[`strIngredient${i}`] !== null)
                .map(i => (
                  <li key={i}>{rec[`strIngredient${i}`]}</li>
              ))}
            </ul>
          </div>
          
          <h2 className="instructions-title">Instructions</h2>
          
          <ol className="instructions">
            {rec.strInstructions.split(".").slice(0, -1).map(instruction => (
              <li key={instruction}>{instruction};</li>
            ))}
          </ol>
          
          <hr/>
          <div className="youtube-video">
            <iframe
              title="youtube-video"
              frameBorder="0"
              src={`https://www.youtube.com/embed/${rec.strYoutube.split("=")[1]}`}
            />
          </div>
          
        </div>
      ))}
    </main>
  );
}
