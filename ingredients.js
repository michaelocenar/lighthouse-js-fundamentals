const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:

// Write a for loop that prints out the contents of ingredients:

// Write any loop (while or for) that prints out the contents of ingredients backwards:

//Write a loop under each comment in the file.
//Under the first, write a while loop that prints out each item of ingredients.
//Under the second, write a for loop that does the same thing.
//And under the third, write any loop, while or for that prints out each item of ingredients but backwards (that is, the first should be "bananas" and the last "eggs").
// while loop
let i = 0;
while (i < ingredients.length) {
  console.log(ingredients[i]);
  i++;
}

// for loop
for (let i = 0; i < ingredients.length; i++) {
  console.log(ingredients[i]);
}

// backwards loop
for (let i = ingredients.length - 1; i >= 0; i--) {
  console.log(ingredients[i]);
}
