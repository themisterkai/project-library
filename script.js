/*Here we have created two different arrays that you can work with if you want.
If you choose to create your own arrays with elements, just make sure that some
of the properties make sense to filter on, and some to sort on.*/

const placeholder = document.querySelector('.recipes');
const selection = document.querySelector('.selection');
const filterItalian = document.getElementById('italian');
const filterAmerican = document.getElementById('american');
const filterClear = document.getElementById('clear');

filterItalian.onclick = () => {
  refilter('italian')
}

filterAmerican.onclick = () => {
  refilter('american')
}

filterClear.onclick = () => {
  refilter('all')
}

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
console.log(cuisineTypes)

const selectList = document.createElement("select");
selectList.id = "cuisineType";
selection.appendChild(selectList);


for (let i = 0; i < cuisineTypes.length; i++) {
  let option = document.createElement("option");
  option.value = cuisineTypes[i];
  option.text = cuisineTypes[i];
  selectList.appendChild(option);
}

// const cuisineTypeSelect = document.getElementById('cuisineType')
selectList.onchange = () => {
  
  refilter(selectList.options[selectList.selectedIndex].value)
  // console.log('++++++', selectList.options[selectList.selectedIndex].value)
}

const refilter = (filter) => {
  let out = '';
  recipes.filter(recipe => {
    if (filter === 'all') {
      return recipe
    }
    if (typeof recipe.cuisineType === 'string') {
      if (recipe.cuisineType.toLowerCase() === filter) {
        return recipe
      }
    } else {
      for (let i = 0; i < recipe.cuisineType.length; i++) {
        if (recipe.cuisineType[i].toLowerCase() === filter) {
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
  placeholder.innerHTML = out;
}

refilter('all')



