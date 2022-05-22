var pizza = {
    crustType:  ["deep dish", "hand tossed"],
    sauceType:  ["traditional", "marinara"],
    cheeses:    ["mozzarella", "feta"],
    toppings:   ["pepperoni", "sausage", "mushrooms", "olives", "onions"]
}

function pizzaOven(crustType, sauceType, cheeses, toppings){
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheese = cheeses;
    pizza.toppings = toppings;

    return pizza;
}

var pizza1 = pizzaOven("deep dish", "traditional", "mozzarella", ["pepperoni", "sausage"]);
var pizza2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);

console.log(pizza1);
console.log(pizza2);

var pizza3 = pizzaOven("hand tossed", "traditional", "mozzarella", "mushrooms");
var pizza4 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["olives", "onions"]);

console.log(pizza3);
console.log(pizza4);

function randomPizza(){
    // call unique variables for each item we need. 
    // reference back to the pizza variable called at the beginning of script. 
    // use Math.floor to define maximum length, then use math.random to call to the random value from the array the script wants.
    // Math.floor(Math.random() * var.x.length)
    var crustType = pizza.crustType[Math.floor(Math.random() * pizza.crustType.length)];
    var sauceType = pizza.sauceType[Math.floor(Math.random() * pizza. sauceType.length)];
    var cheese = pizza.cheeses[Math.floor(Math.random() * pizza.cheeses.length)];
    var toppings = pizza.toppings[Math.floor(Math.random() * pizza.toppings.length)];

// create variable to store random array selection.
    var returnpizza = pizzaOven(crustType, sauceType, cheese, toppings);

    return returnpizza;
}

var pizza5 = randomPizza();
console.log(pizza5);
