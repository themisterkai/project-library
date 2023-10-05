/*Here we have created two different arrays that you can work with if you want.
If you choose to create your own arrays with elements, just make sure that some
of the properties make sense to filter on, and some to sort on.*/

let placeholder = document.querySelector('.recipes')
let filterItalian = document.getElementById('italian')
let filterAmerican = document.getElementById('american')
let filterClear = document.getElementById('clear')

let filter = 'american';

filterItalian.onclick= () => {
  filter = 'italian';
  refilter()
}

filterAmerican.onclick= () => {
  filter = 'american';
  refilter()
}

filterClear.onclick= () => {
  filter = '';
  refilter()
}

const refilter = () => {
  let out = '';
  recipes.filter(recipe => {
    if (filter === '') {
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

refilter()



