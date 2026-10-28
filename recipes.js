const recipeDatabase = [
{
title: "Classic Egg Sandwich",
subtitle: "crunchy chewy and smooth",
icon: "🥪",
ingredients: ["2 Large Eggs", "2 Slices of Fresh Bread", "2 tbsp Mayonnaise", "Salt & Black Pepper", "A pinch of Paprika"],
directions: ["Boil the eggs in water for 9-10 minutes until completely hard.", "Cool the eggs in cold water, peel off shells, and place them in a bowl.", "Mash the eggs thoroughly using a fork.", "Mix in the mayonnaise, salt, and pepper until thick and creamy.", "Spread the mixture evenly between your slices of bread and slice in half."]
    },
    { 
title: "Fried rice with eggs",
subtitle: "Crispy ricee",
icon: "🍳",
ingredients: [ " 1 cup cooked rice" , "1 fresh egg" , "1 tbsp soy sauce" , " 1 tbsp cooking oil" , " Chopped green onions(optional)"],
directions: [ " Heat the oil in a pan over medium heat" , " Crack an egg into the pan" , "Scramble it" , " Pour the rice directly onto the cooked egg" , " Add soy sauce and spices of your choice" , "Cook for 3-4 minutes" , " Add the green onions and serve hot."],
    },
{
title: "Fruit salad",  
subtitle: "sweet n fresh",
icon: "🍓",
ingredients: ["1 Cup Fresh Strawberries", "1 Ripe Banana", "1 Crisp Apple", "1 tbsp Honey", "1 tsp Fresh Lemon Juice"],
directions:  ["wash your fruits thenchop them" , " Add all them into a bowl" , " Add the honey and lemon juice" , "Enjoy"],
},
{
title: " Easy mug cake",
subtitle: "warm choloty fluffy" , 
icon:  "🧁",
ingredients: ["4 tbsp all purpose flour" , " 4tbsp grandulated sugar" , " 1 tbsp cocoa powder" , " 3 tbsp whole milk" , " 1 tbsp melted butter"],
directions: [ " Whisk the flour , cocoa powder and sugar inside a mug" , " Now add the fresh milk and butter into it" , " whisk until a smooth paste is formed" ," Now add the mug into the microwave for about 6 to 7 seconds" , " Eat when cooled down"],
},
{
title: "a Avocado Toast",
subtitle: "smooth rich and sweet",
icon: "🥑",
ingredients: ["1 Ripe Avocado", "1 Thick Slice of Sourdough Bread", "1 tsp Olive Oil", "A pinch of Red Pepper Flakes", "Salt and Pepper to taste"],
directions: ["Toast your slice of sourdough bread until crispy and golden brown.", "Cut the avocado in half, remove the pit, and scoop the flesh into a bowl.", "Mash the avocado coarsely with a fork, mixing in salt and pepper.", "Spread the mashed mixture thickly over your warm toasted bread.", "Drizzle with olive oil and scatter red pepper flakes over the top."],
},
{
title: " Classic grilled cheese sandwhich " ,
 subtitle: " crispy n chesy",
 icon:  "🧀",
ingredients: [ "2 slices of bread" , " 2 slices of chedder cheese" ,  "1 tbsp of butter"],
directions: ["Spread butter evenly on both slices of bread" , "Place one slice, butter-side down, into a cold frying pan.", "Lay your cheese slices on top, then cover with the second bread slice (butter-side up).", "Turn heat to medium and cook until the bottom bread is golden brown (3-4 mins).", "Flip carefully and cook the other side until crispy and cheese is fully melted."],
},
{
title: " Simple tomato pasta" ,
subtitle: " easy pasta bowl",
icon: "🍝",
ingredients: ["100g Pasta Noodles", "1/2 Cup Tomato Marinara Sauce", "1 tbsp Parmesan Cheese", "Salt for boiling water"],
directions: ["Boil water in a pot, add a generous pinch of salt, and cook pasta for 8-10 minutes.", "Drain the cooked pasta noodles well, reserving a tiny bit of pasta water.", "Return pasta to the pot and pour in the tomato sauce.", "Cook over low heat for 1 minute until sauce is hot and clings to the noodles.", "Plate it up and top with a dusting of parmesan cheese."]
},
{
title: "Homemade Pizza Bagel",
subtitle: "Mini personal crispy baked pizzas",
icon: "🍕",
ingredients: ["1 Plain Bagel (Split in half)", "2 tbsp Pizza Sauce", "1/4 Cup Shredded Mozzarella", "Mini Pepperoni slices"],
directions: ["Preheat your oven or toaster oven to 200°C.", "Place your bagel halves face-up on a baking sheet.", "Spread a spoonful of pizza sauce over both open halves.", "Cover generously with shredded mozzarella cheese and pepperonis.", "Bake for 5-7 minutes until the cheese is bubbling and slightly brown."]
},
{
title: "A Creamy Banana Smoothie",
subtitle: "a smooth blended fruit shake",
icon: "🍌",
 ingredients: ["1 Ripe Banana", "half a Cup Milk", "1/4 Cup Vanilla Yogurt", "3 Ice Cubes(which is optional i dont like it cold though!"],
directions: ["Peel your ripe banana and break it into smaller chunks.", "Place the banana chunks, milk, yogurt, and ice into a blender container.", "Secure the lid tightly and blend on high speed until completely smooth.", "Pour into a tall glass and enjoy immediately."]
},
{
title: "Crunchy French Toast",
subtitle: "Sweet pan-fried cinnamon egg bread toast",
icon: "🍞",
ingredients: ["1 Large Egg", "1/4 Cup Milk", "1/2 tsp Ground Cinnamon", "2 Slices of Bread", "Maple Syrup for serving"],
directions: ["Whisk the egg, milk, and ground cinnamon together inside a  bowl.", "Heat a lightly oiled skillet over medium heat.", "Dip each slice of bread into the liquid mixture, soaking both sides completely.", "Place in the hot skillet and cook until golden brown on both sides.", "Serve stacked warm on a plate drizzled with sweet maple syrup."]
}
];
const sidebar = document.getElementById('sidebar');

recipeDatabase.forEach((recipe, index) => {
    const card = document.createElement('div');
    card.className = 'recipe-item-card';
    if(index === 0) card.className += ' active'; 
    card.innerHTML = `<div class="icon">${recipe.icon}</div> <div> <h3>${recipe.title}</h3> </div>`;
    
    card.addEventListener('click', () => {
        document.querySelectorAll('.recipe-item-card').forEach(c => c.classList.remove('active'));
        card.classList.add('active');
        loadRecipe(recipe);
    });
    sidebar.appendChild(card);
});

function loadRecipe(recipe) {
    document.getElementById('displayTitle').innerText = recipe.title;
    document.getElementById('displaySubtitle').innerText = recipe.subtitle;
    
    const ingContainer = document.getElementById('displayIngredients');
    ingContainer.innerHTML = '';
    recipe.ingredients.forEach(ing => {
        const li = document.createElement('li');
        li.innerText = ing;
        ingContainer.appendChild(li);
    }); 
    
    const dirContainer = document.getElementById('displayDirections');
    dirContainer.innerHTML = '';
    recipe.directions.forEach(step => {
        const li = document.createElement('li');
        li.innerText = step;
        dirContainer.appendChild(li);
    });
}
loadRecipe(recipeDatabase[0]);
const ingredients = ['🥞', '🍕', '🍓', '🥑', '🥚', '🧁', '🧀', '🍅', '🍋', '🥕', '🍩', '🍪'];
const columns = 4;
const rows = 4;
for (let r = 0; r < rows; r++) {
    for (let c = 0; c < columns; c++) {
     if ((r === 1 || r === 2) && (c === 1 || c === 2)) continue;
     const emojiEl = document.createElement('div');
      emojiEl.className = 'floating-emoji';
      emojiEl.innerText = ingredients[Math.floor(Math.random() * ingredients.length)];
      const baseLeft = (c / columns) * 100 + (100 / columns / 4);
     const baseTop = (r / rows) * 100 + (100 / rows / 4);
     emojiEl.style.left = (baseLeft + (Math.random() * 8 - 4)) + '%';
      emojiEl.style.top = (baseTop + (Math.random() * 8 - 4)) + '%';
     emojiEl.style.setProperty('--duration', (Math.random() * 3 + 4) + 's');
      emojiEl.style.setProperty('--move-x', (Math.random() * 30 - 15) + 'px');
 emojiEl.style.setProperty('--move-y', (Math.random() * -40 - 15) + 'px');
     emojiEl.style.setProperty('--rot', (Math.random() * 40 - 20) + 'deg');
      document.body.appendChild(emojiEl);
    }
}















