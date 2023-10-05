/*Here we have created two different arrays that you can work with if you want.
If you choose to create your own arrays with elements, just make sure that some
of the properties make sense to filter on, and some to sort on.*/

const books = [
  {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    year: 1925,
    genre: 'Fiction',
    rating: 4.2,
    description:
      'A classic novel set in the Roaring Twenties, it explores themes of wealth, love, and the American Dream through the enigmatic Jay Gatsby.',
    image: './books-images/the-great-gatsby.jpg'
  },
  {
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    year: 1960,
    genre: 'Fiction',
    rating: 4.5,
    description:
      'Set in the American South, this novel tackles issues of racism and injustice through the eyes of young Scout Finch.',
    image: './books-images/to-kill-a-mockingbird.jpg'
  },
  {
    title: '1984',
    author: 'George Orwell',
    year: 1949,
    genre: 'Science Fiction',
    rating: 4.4,
    description:
      'A dystopian classic that explores totalitarianism and the consequences of a surveillance state in a bleak future.',
    image: './books-images/1984.jpg'
  },
  {
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    year: 1813,
    genre: 'Fiction',
    rating: 4.25,
    description:
      'A timeless romance novel that examines societal expectations and the misunderstandings that can arise from pride and prejudice.',
    image: './books-images/pride-and-prejudice.jpg'
  },
  {
    title: 'The Catcher in the Rye',
    author: 'J.D. Salinger',
    year: 1951,
    genre: 'Fiction',
    rating: 4,
    description:
      'Narrated by the teenage Holden Caulfield, the novel explores themes of alienation and the search for authenticity.',
    image: './books-images/unknown.jpg'
  },
  {
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    year: 1937,
    genre: 'Fantasy',
    rating: 4.6,
    description:
      'A fantasy adventure novel that follows Bilbo Baggins on a quest to help a group of dwarves reclaim their homeland from a dragon.',
    image: './books-images/the-hobbit.jpg'
  },
  {
    title: "Harry Potter and the Sorcerer's Stone",
    author: 'J.K. Rowling',
    year: 1997,
    genre: 'Fantasy',
    rating: 4.7,
    description:
      'The first book in the beloved Harry Potter series, it introduces readers to the magical world of Hogwarts and the young wizard Harry Potter.',
    image: "./books-images/harry-potter-and-the-sorcerer'.jpg"
  },
  {
    title: 'Moby-Dick',
    author: 'Herman Melville',
    year: 1851,
    genre: 'Adventure',
    rating: 4.1,
    description:
      'An epic tale of obsession, revenge, and the relentless pursuit of the great white whale, Moby Dick.',
    image: './books-images/moby-dick.jpg'
  },
  {
    title: 'The Lord of the Rings: The Fellowship of the Ring',
    author: 'J.R.R. Tolkien',
    year: 1954,
    genre: 'Fantasy',
    rating: 4.55,
    description:
      'The first volume of the epic fantasy trilogy follows Frodo Baggins and the Fellowship on their quest to destroy the One Ring.',
    image: './books-images/the-lord-of-the-rings.jpg'
  },
  {
    title: 'The Shining',
    author: 'Stephen King',
    year: 1977,
    genre: 'Horror',
    rating: 4.3,
    description:
      "A psychological horror novel that tells the story of the Torrance family's terrifying experiences at the haunted Overlook Hotel.",
    image: './books-images/unknown.jpg'
  },
  {
    title: 'The Chronicles of Narnia: The Lion, the Witch and the Wardrobe',
    author: 'C.S. Lewis',
    year: 1950,
    genre: 'Fantasy',
    rating: 4.15,
    description:
      'The first book in the Chronicles of Narnia series, it follows the adventures of children who discover the magical land of Narnia.',
    image: './books-images/the-chronicles-of-narnia.jpg'
  },
  {
    title: 'The Da Vinci Code',
    author: 'Dan Brown',
    year: 2003,
    genre: 'Mystery',
    rating: 3.8,
    description:
      'A gripping mystery thriller that follows Harvard symbologist Robert Langdon as he unravels the secrets of the Da Vinci Code.',
    image: './books-images/unknown.jpg'
  },
  {
    title: 'The Alchemist',
    author: 'Paulo Coelho',
    year: 1988,
    genre: 'Fiction',
    rating: 4.25,
    description:
      'A philosophical novel that tells the story of Santiago, a shepherd boy, on his quest to discover his personal legend.',
    image: './books-images/unknown.jpg'
  },
  {
    title: 'The Hunger Games',
    author: 'Suzanne Collins',
    year: 2008,
    genre: 'Science Fiction',
    rating: 4.3,
    description:
      "In a dystopian future, Katniss Everdeen becomes a symbol of rebellion when she volunteers to take her sister's place in the brutal Hunger Games.",
    image: './books-images/unknown.jpg'
  },
  {
    title: 'The Girl with the Dragon Tattoo',
    author: 'Stieg Larsson',
    year: 2005,
    genre: 'Mystery',
    rating: 4.1,
    description:
      'A gripping mystery novel featuring investigative journalist Mikael Blomkvist and the enigmatic hacker Lisbeth Salander.',
    image: './books-images/unknown.jpg'
  },
  {
    title: 'The Road',
    author: 'Cormac McCarthy',
    year: 2006,
    genre: 'Dystopian',
    rating: 4,
    description:
      "Set in a post-apocalyptic world, it follows a father and son's harrowing journey to survive and find safety.",
    image: './books-images/unknown.jpg'
  },
  {
    title: "The Hitchhiker's Guide to the Galaxy",
    author: 'Douglas Adams',
    year: 1979,
    genre: 'Science Fiction',
    rating: 4.35,
    description:
      "A comedic science fiction series that follows the misadventures of Arthur Dent after Earth's destruction.",
    image: './books-images/unknown.jpg'
  },
  {
    title: 'The Giver',
    author: 'Lois Lowry',
    year: 1993,
    genre: 'Dystopian',
    rating: 4.12,
    description:
      'A dystopian novel set in a seemingly perfect society where young Jonas discovers the dark truth beneath the surface.',
    image: './books-images/unknown.jpg'
  }
]

const recipes = [
  {
    name: 'Individual vegetarian lasagnes',
    cuisineType: ['italian'],
    ingredients: [
      '1.2 kg cherry tomatoes',
      '5 sprigs of fresh thyme',
      'extra virgin olive oil',
      '2 shallots',
      '2 cloves of garlic',
      '500 g baby spinach',
      '8-12 fresh or dried lasagne sheets',
      '350 g ricotta cheese',
      'WHITE SAUCE',
      '600 ml milk',
      '25 g unsalted butter',
      '2 heaped tablespoons flour',
      '150 g vegetarian sharp, mature cheese',
      '100 g mozzarella'
    ],
    source: 'Jamie Oliver',
    totalTime: 130,
    url: 'http://www.jamieoliver.com/recipes/vegetables-recipes/individual-vegetarian-lasagnes/',
    image: './recipe-images/individual-vegetarian-lasagnes.jpg'
  },
  {
    name: 'Vegetarian Stir-Fried Garlic Scape',
    cuisineType: ['Balanced'],
    ingredients: [
      '8 oz. garlic scapes',
      '3 oz. baby corn',
      '3 oz. carrots',
      '1 oz. dried shiitake mushrooms',
      '1 clove of garlic sliced thinly',
      '3 slices of fresh ginger root',
      '2 tablespoons vegetable oil',
      '1/4 cup shaoxing cooking wine',
      '1/4 vegetarian stock or water',
      '1 tablespoon light soy sauce',
      '1 teaspoon sugar',
      '1 teaspoon cornstarch',
      '1/4 teaspoon ground white pepper'
    ],
    source: 'Red Cook',
    totalTime: 15,
    URL: 'http://redcook.net/2010/06/16/garlic-scape-an-off-menu-treat/',
    image: './recipe-images/vegetarian-stir-fried-garlic-s.jpg'
  },
  {
    name: 'Cheat’s cheesy focaccia',
    cuisineType: ['Italian'],
    ingredients: [
      '500g pack bread mix',
      '2 tbsp olive oil , plus a little extra for drizzling',
      '25g parmesan (or vegetarian alternative), grated',
      '75g dolcelatte cheese (or vegetarian alternative)'
    ],
    source: 'BBC Good Food',
    totalTime: 40,
    URL: 'https://www.bbcgoodfood.com/recipes/cheats-cheesy-focaccia',
    image: './recipe-images/cheat’s-cheesy-focaccia.jpg'
  },
  {
    name: "Vegetarian Shepherd's Pie",
    cuisineType: ['Balanced', 'High-Fiber'],
    ingredients: [
      '2 tablespoons extra-virgin olive oil',
      '1 large onion, finely diced',
      '2 carrots, peeled and thinly sliced',
      '2 celery stalks, thinly sliced',
      '10 ounces cremini mushrooms, trimmed and sliced',
      '1 tablespoon tomato paste',
      "1 tablespoon vegetarian Worcestershire sauce, such as Annie's Naturals",
      '1 dried bay leaf',
      '1 cup French green lentils, picked over',
      'Kosher salt and freshly ground pepper',
      '1 cup frozen peas',
      '2 pounds Yukon Gold potatoes, scrubbed and cut into 1 1/2-inch pieces',
      '4 cloves garlic',
      '4 tablespoons unsalted butter',
      '1/2 cup whole milk, warmed'
    ],
    source: 'Martha Stewart',
    totalTime: 120,
    URL: 'https://www.marthastewart.com/1535235/vegetarian-shepherds-pie',
    image: './recipe-images/vegetarian-shepherds-pie.jpg'
  },
  {
    name: 'Chicken Paprikash',
    cuisineType: ['Low-Carb'],
    ingredients: [
      '640 grams chicken - drumsticks and thighs ( 3 whole chicken legs cut apart)',
      '1/2 teaspoon salt',
      '1/4 teaspoon black pepper',
      '1 tablespoon butter – cultured unsalted (or olive oil)',
      '240 grams onion sliced thin (1 large onion)',
      '70 grams Anaheim pepper chopped (1 large pepper)',
      '25 grams paprika (about 1/4 cup)',
      '1 cup chicken stock',
      '1/2 teaspoon salt',
      '1/2 cup sour cream',
      '1 tablespoon flour – all-purpose'
    ],
    source: 'No Recipes',
    totalTime: 80,
    URL: 'http://norecipes.com/recipe/chicken-paprikash/',
    image: './recipe-images/chicken-paprikash.jpg'
  },
  {
    name: 'Baked Chicken',
    cuisineType: ['american'],
    ingredients: [
      '6 bone-in chicken breast halves, or 6 chicken thighs and wings, skin-on',
      '1/2 teaspoon coarse salt',
      '1/2 teaspoon Mrs. Dash seasoning',
      '1/4 teaspoon freshly ground black pepper'
    ],
    source: 'Martha Stewart',
    totalTime: 90,
    url: 'http://www.marthastewart.com/318981/baked-chicken',
    image: './recipe-images/baked-chicken.jpg'
  },
  {
    name: 'Deep Fried Fish Bones',
    cuisineType: ['south east asian'],
    ingredients: ['8 small whiting fish or smelt', '4 cups vegetable oil'],
    source: 'Serious Eats',
    totalTime: 31,
    url: 'http://www.seriouseats.com/recipes/2011/03/deep-fried-fish-bones-recipe.html',
    image: './recipe-images/deep-fried-fish-bones.jpg'
  },
  {
    name: 'Burnt-Scallion Fish',
    cuisineType: ['chinese'],
    ingredients: [
      '2 bunches scallions',
      '8 tbsp. butter',
      '2 8-oz. fish filets'
    ],
    source: 'Saveur',
    totalTime: 70,
    url: 'http://www.saveur.com/article/Recipes/Burnt-Scallion-Fish',
    image: './recipe-images/fish-dish.jpg'
  },
  {
    name: 'Curry-Crusted Fish',
    cuisineType: ['south east asian'],
    ingredients: [
      '3 slices bread , about 85g/3oz in total',
      '1 lime',
      '1.0 tbsp Korma curry paste',
      '4 thick white fish fillets'
    ],
    source: 'BBC Good Food',
    totalTime: 80,
    url: 'http://www.bbcgoodfood.com/recipes/4717/',
    image: './recipe-images/fish-dish.jpg'
  },
  {
    name: 'Meat Stock',
    cuisineType: 'american',
    ingredients: [
      '2.5 pounds beef marrow bones',
      '1 large onion, quartered',
      '2 carrots, sliced',
      '1 leek, cleaned and sliced',
      '2 celery stalks, sliced',
      '2.5 pounds organic beef stew meat, cubed',
      '2 tablespoons tomato paste',
      '5 cloves garlic',
      '2 bay leaves',
      '3 sprigs thyme',
      '3 sprigs Italian parsley',
      '1/2 teaspoon black peppercorns'
    ],
    source: 'Food52',
    totalTime: 60,
    url: 'https://food52.com/recipes/3712-meat-stock',
    image: './recipe-images/meat.jpg'
  },
  {
    name: 'Homemade Meat Broth',
    cuisineType: 'american',
    ingredients: [
      '1 teaspoon salt',
      '1 carrot, peeled',
      '1 medium onion, peeled',
      '2 or 3 celery stalks',
      '¼ red or yellow bell pepper, stripped of all its seeds',
      '1 small boiling potato, peeled',
      '1 ripe, fresh tomato, or 1 canned Italian plum tomato, drained of juice',
      '5 pounds assorted pieces of meat and bones (see meat suggestions above), of which no less than 1½ pounds is all meat'
    ],
    source: 'Cookstr',
    totalTime: 60,
    url: 'http://www.cookstr.com/recipes/il-brodo-homemade-meat-broth',
    image: './recipe-images/meat.jpg'
  },
  {
    name: 'Spice-Rubbed Grilled Flap Meat (Sirloin Tip) Recipe',
    cuisineType: 'south-american',
    ingredients: [
      '1 tablespoon whole black peppercorns, toasted',
      '1 teaspoon coriander seed, toasted',
      '1 teaspoon fennel seed, toasted',
      '1 teaspoon cumin pods, toasted',
      '1 teaspoon red pepper flakes',
      '1/2 teaspoon dried oregano',
      '2 medium cloves garlic, minced (about 2 teaspoons)',
      '2 tablespoons vegetable or canola oil',
      '1 whole flap meat steak, 2 to 2 1/2 pounds',
      'Kosher salt'
    ],
    source: 'Serious Eats',
    totalTime: 240,
    url: 'http://www.seriouseats.com/recipes/2012/05/spice-rubbed-grilled-flap-meat-sirloin-tip-recipe.html',
    image: './recipe-images/grilled.jpg'
  }
]
