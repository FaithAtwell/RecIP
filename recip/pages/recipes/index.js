import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function Recipes() {
  const router = useRouter();
  const { ingredients } = router.query;
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    if (ingredients) {
      fetchRecipes(ingredients);
    }
  }, [ingredients]);

  const fetchRecipes = async (ingredients) => {
    try {
      const response = await fetch(
        `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredients}&apiKey=${process.env.NEXT_PUBLIC_SPOONACULAR_API_KEY}`
      );
      const data = await response.json();
      console.log(data);  // Log the data to see its structure
      setRecipes(data);   // Ensure data is an array
    } catch (error) {
      console.error('Error fetching recipes:', error);
    }
  };
  

  return (
    <div>
      <h1>Recipes for: {ingredients}</h1>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.id}>
            <a href={`/recipes/${recipe.id}`}>{recipe.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
