import "./App.css";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RecipeList from "./components/recipeList";
import RecipeForm from "./components/RecipeForm";

function App() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const storeRecipes = JSON.parse(localStorage.getItem("recipes") || []);
    setRecipes(storeRecipes);
  });
  const saveRecipesToLocalStorage = (updatedRecipes) => {
    setRecipes(updatedRecipes);
    localStorage.setItem("recipes", JSON.stringify(updatedRecipes));
  };

  const handleAddRecipe = (newRecipe) => {
    const updatedRecipes = [...recipes, { ...newRecipe, id: Date.now() }];
    saveRecipesToLocalStorage(updatedRecipes);
  };

  const handleEditRecipe = (editedRecipe) => {
    const updatedRecipes = recipes.map((recipe) =>
      recipe.id === editedRecipe.id ? editedRecipe : recipe
    );
    saveRecipesToLocalStorage(updatedRecipes);
  };

  const handleDeleteRecipe = (recipeId) => {
    const updatedRecipes = recipes.filter((recipe) => recipe.id !== recipeId);
    saveRecipesToLocalStorage(updatedRecipes);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" exact>
          {/* Moved RecipeList outside the Routes */}
          <RecipeList recipes={recipes} onDelete={handleDeleteRecipe} />
        </Route>
        <Route path="/add" exact>
          <RecipeForm onSubmit={handleAddRecipe} />
        </Route>
        <Route path="/edit/:id" exact>
          <RecipeForm
            onSubmit={handleEditRecipe}
            initialValues={recipes.find(
              (recipe) =>
                recipe.id.toString() ===
                window.location.pathname.split("/").pop()
            )}
          />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
