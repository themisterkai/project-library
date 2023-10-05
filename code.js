const recipePlaceholder = document.querySelector('.recipes');
const recipeCountPlaceholder = document.querySelector('.recipe-count-text');
const selection = document.querySelector('.selection');
const sortSelect = document.getElementById('sort-select');
const ingredientsSelect = document.getElementById('ingredients-select');
const searchBar = document.getElementById('search-bar');
const resetButton = document.getElementById('reset-button');

// default values for the different filters and sort options. I chose to
// use global variables and implement it this way so that we can use multiple
// filters at the same time
let cuisineTypeSelection = 'all';
let sortBy = '';
let ingredientsCount = '';
let searchBarText = '';

// dynamically generate the cuisine types based on our recipes
const cuisineTypes = recipes.reduce((acc, recipe) => {
  // since the cuisine types from our json can either be a string or an
  // array of strings, we need to check for both possibilities
  if (typeof recipe.cuisineType === 'string') {
    // we only need want to add the cuisine type to our cuisineTypes array
    // if we don't have it yet. 
    if (!acc.includes(recipe.cuisineType.toLowerCase())) {
      acc.push(recipe.cuisineType.toLowerCase());
    }
  } else {
    for (let i = 0; i < recipe.cuisineType.length; i++) {
      if (!acc.includes(recipe.cuisineType[0].toLowerCase())) {
        acc.push(recipe.cuisineType[0].toLowerCase());
      }
    }
  }
  // sort the array
  return acc.sort()
}, ['all']);

// generate the select list for cuisineType
const cuisineTypeSelect = document.createElement("select");
cuisineTypeSelect.id = "cuisine-type";
selection.appendChild(cuisineTypeSelect);
// populate the select list with the different cuisine types
cuisineTypes.forEach(cuisineType => {
  const option = document.createElement("option");
  option.value = cuisineType;
  option.text = cuisineType;
  cuisineTypeSelect.appendChild(option);
});

// filterRecipe runs multiple different filters on the recipes:
// 1. by cuisine type
// 2. by ingredient count
// 3. by matching the recipe name or ingredient name
// This is implemented this way in order to have multiple different filters
// running at the same time. Note that the user does not have to filter by
// all the possible options.
const filterRecipe = recipesToFilter => {
  // we filter the recipes by the cuisine type
  const filteredByCuisineType = recipesToFilter.filter(recipe => {
    if (cuisineTypeSelection === 'all') {
      return recipe;
    }
    if (typeof recipe.cuisineType === 'string') {
      if (recipe.cuisineType.toLowerCase() === cuisineTypeSelection) {
        return recipe;
      }
    } else {
      for (let i = 0; i < recipe.cuisineType.length; i++) {
        if (recipe.cuisineType[i].toLowerCase() === cuisineTypeSelection) {
          return recipe;
        }
      }
    }
  });

  // we filter the recipes by the number of ingredients
  const filteredByIngredients = filteredByCuisineType.filter(recipe => {
    switch (ingredientsCount) {
      case '5':
        return recipe.ingredients.length <= 5 ? recipe : '';
      case '10': 
        return recipe.ingredients.length <= 10 ? recipe : '';
      default:
        return recipe;
    } 
  });

  // we filter the recipes by keywords, filtering by matching the recipe name
  // or by matching the ingredient name
  const filteredBySearch = filteredByIngredients.filter(recipe => {
    // match by name
    if (recipe.name.toLowerCase().includes(searchBarText.toLowerCase())) {
      return recipe;
    }
    // match by ingredients
    for (ingredient of recipe.ingredients) {
      if (ingredient.toLowerCase().includes(searchBarText.toLowerCase())) {
        return recipe;
      }
    }
  });

  return filteredBySearch;
}

// Sort the recipe by alphabetical order (ascending or descending), min/max
// cooking time, or min/max ingredients, 
const sortRecipe = recipesToSort => {
  return recipesToSort.sort((a, b) => {
    switch (sortBy) {
      case 'ascend':
        return a.name.localeCompare(b.name);
      case 'descend':
        return a.name.localeCompare(b.name) * -1;
      case 'min':
        return a.totalTime - b.totalTime;
      case 'max':
        return b.totalTime - a.totalTime;
      case 'num-min':
        return a.ingredients.length - b.ingredients.length;
      case 'num-max':
          return b.ingredients.length - a.ingredients.length;
      default:
        return;
    }
  });
}

// function to display the recipes we have based on the filter selected
// and the sort option selected
const displayRecipes = () => {
  const recipesToFilter = filterRecipe(recipes);
  const sortedRecipes = sortRecipe(recipesToFilter);

  let recipeCountOutput = '';

  if (sortedRecipes.length < 1) {
    recipeCountOutput += `
      <div class="recipe-count">
        No recipes to display based on the search term or selected filter
      </div>
    `
  } else {
    recipeCountOutput += `
      <div class="recipe-count">
        Showing you ${sortedRecipes.length} ${sortedRecipes.length > 1 ? 
          'recipes' : 'recipe'}
      </div>
    `
  }
  recipeCountPlaceholder.innerHTML = recipeCountOutput;
  
  let recipeOutput = '';
  sortedRecipes.forEach(recipe => {
    recipeOutput += `
      <div class="col-sm">
        <div class="recipe">
          <div class="image">
            <img src='${recipe.image}' />
          </div>
          <div class="name">
              <h5>
                <a href="${!recipe.url ? recipe.URL : recipe.url}" target="_blank">
                  ${recipe.name}
                </a>
              </h5>
          </div>
          <div class="cooking-time">
            ${recipe.totalTime} min
          </div>
        </div>
      </div>
    `
  });
  
  recipePlaceholder.innerHTML = recipeOutput; 
}

// call displayRecipes initially. this will display all available recipes
displayRecipes();

// filter recipes by cuisine type when the selected cuisine type changes
cuisineTypeSelect.onchange = () => {
  cuisineTypeSelection =
    cuisineTypeSelect.options[cuisineTypeSelect.selectedIndex].value;
  displayRecipes();
}

// filter recipes by the number of ingredients
ingredientsSelect.onchange = () => {
  ingredientsCount =
    ingredientsSelect.options[ingredientsSelect.selectedIndex].value;
  displayRecipes();
}

// sort the recipes using the selected option
sortSelect.onchange = () => {
  sortBy = sortSelect.options[sortSelect.selectedIndex].value;
  displayRecipes();
}

// filter recipes by search keywords
searchBar.oninput = () => {
  searchBarText = searchBar.value;
  displayRecipes();
}

// reset all filters and sort options
resetButton.onclick = () => {
  cuisineTypeSelect.selectedIndex = 0;
  cuisineTypeSelection = 'all';

  sortSelect.selectedIndex = 0;
  sortBy = '';

  ingredientsSelect.selectedIndex = 0;
  ingredientsCount = '';

  searchBar.value = '';
  searchBarText = '';

  displayRecipes();
}

