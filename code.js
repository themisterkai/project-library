const recipePlaceholder = document.querySelector('.recipes');
const selection = document.querySelector('.selection');
const sortSelect = document.getElementById('sort-select');
let cuisineTypeSelection = 'all';
let sortBy = '';

// dynamically generate the cuisine types based on our recipes
const cuisineTypes = recipes.reduce((acc, recipe) => {
  // since the cuisine types from our json can either be a string or an
  // array of strings, we need to check for both possibilities
  if (typeof recipe.cuisineType === 'string') {
    // we only need want to add the cuisine type to our cuisineTypes array
    // if we don't have it yet. 
    if (!acc.includes(recipe.cuisineType.toLowerCase())) {
      acc.push(recipe.cuisineType.toLowerCase())
    }
  } else {
    for (let i = 0; i < recipe.cuisineType.length; i++) {
      if (!acc.includes(recipe.cuisineType[0].toLowerCase())) {
        acc.push(recipe.cuisineType[0].toLowerCase())
      }
    }
  }
  // sort the array
  return acc.sort()
}, ['all']);

// generate the select list for cuisineType
const cuisineTypeSelect = document.createElement("select");
cuisineTypeSelect.id = "cuisineType";
selection.appendChild(cuisineTypeSelect);
// populate the select list with the different cuisine types
cuisineTypes.forEach(cuisineType => {
  const option = document.createElement("option");
  option.value = cuisineType;
  option.text = cuisineType;
  cuisineTypeSelect.appendChild(option);
})
// filter recipes when the selected cuisine type changes
cuisineTypeSelect.onchange = () => {
  cuisineTypeSelection = cuisineTypeSelect.options[cuisineTypeSelect.selectedIndex].value;
  displayRecipes()
}

sortSelect.onchange = () => {
  sortBy = sortSelect.options[sortSelect.selectedIndex].value;
  displayRecipes()
}

const filterRecipe = recipesToFilter => {
  return recipesToFilter.filter(recipe => {
    if (cuisineTypeSelection === 'all') {
      return recipe
    }
    if (typeof recipe.cuisineType === 'string') {
      if (recipe.cuisineType.toLowerCase() === cuisineTypeSelection) {
        return recipe
      }
    } else {
      for (let i = 0; i < recipe.cuisineType.length; i++) {
        if (recipe.cuisineType[i].toLowerCase() === cuisineTypeSelection) {
          return recipe
        }
      }
    }
  })
}

const sortRecipe = recipesToSort => {
  return recipesToSort.sort((a, b) => {
    switch (sortBy) {
      case 'min':
        return a.totalTime - b.totalTime;
      case 'max':
        return b.totalTime - a.totalTime;
      case 'ascend':
        return a.name.localeCompare(b.name);
      case 'descend':
        return a.name.localeCompare(b.name) * -1;
      default:
        return;
    }
  });
}

// function to display the recipes we have based on the filter selected
const displayRecipes = () => {
  let out = '';

  const recipesToFilter = filterRecipe(recipes)
  const sortedRecipes = sortRecipe(recipesToFilter)
  if (sortedRecipes.length < 1) {
    out += `
      <div class="recipe">
        No recipes to display based on selected filter
      </div>
    `
  } else {
    sortedRecipes.forEach(recipe => {
      out += `
        <div class="recipe">
          <div class="image">
            <img src='${recipe.image}' />
          </div>
          <div class="name">
            ${recipe.name}, ${recipe.totalTime} min
          </div>
        </div>
      `
    });
  }
  
  recipePlaceholder.innerHTML = out;
}



// call displayRecipes initially. this will display all available recipes
displayRecipes();



