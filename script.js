const recipePlaceholder = document.querySelector('.recipes');
const selection = document.querySelector('.selection');

// dynamically generate the cuisine types based on our recipes
const cuisineTypes = recipes.reduce((acc, recipe) => {
  if (typeof recipe.cuisineType === 'string') {
    if (acc.indexOf(recipe.cuisineType.toLowerCase()) === -1) {
      acc.push(recipe.cuisineType.toLowerCase())
    }
  } else {
    for (let i = 0; i < recipe.cuisineType.length; i++) {
      if (acc.indexOf(recipe.cuisineType[0].toLowerCase()) === -1) {
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
  displayRecipes(cuisineTypeSelect.options[cuisineTypeSelect.selectedIndex].value)
}

const displayRecipes = cuisineTypeSelection => {
  let out = '';
  recipes.filter(recipe => {
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
  }).forEach(recipe => {
    out += `
      <div class="recipe">
        <div class="image">
          <img src='${recipe.image}' />
        </div>
        <div class="name">
          ${recipe.name}
        </div>
      </div>
    `
  });
  recipePlaceholder.innerHTML = out;
}

displayRecipes('all')



