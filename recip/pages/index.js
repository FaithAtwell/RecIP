import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Home() {
  const [ingredients, setIngredients] = useState('');
  const router = useRouter();

  const handleSearch = (e) => {
    e.preventDefault();
    router.push(`/recipes?ingredients=${ingredients}`);
  };

  return (
    <div>
      <h1>Recipe Finder</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Enter ingredients"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
        />
        <button type="submit">Search Recipes</button>
      </form>
    </div>
  );
}
