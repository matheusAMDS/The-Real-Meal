import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom"

import api from "../../services/api"
import "./styles.css"

export default function Categories() {
  const [ categories, setCategories ] = useState([])

  useEffect(() => {
    async function loadCategories() {
      const resp = await api.get("/categories.php")
      setCategories(resp.data.categories)
    }

    loadCategories()
  }, [])

  return (
    <main>
      <div id="categories">
        <ul>
          {categories.map(category => (
            <div className="category" key={category.idCategory}>
              <Link to={`/categories/${category.strCategory}`}>
                <img src={category.strCategoryThumb} alt=""/>
                <p className="category-title">{category.strCategory}</p>
              </Link>
            </div>
          ))}
        </ul>
      </div>
    </main>
  );
}
