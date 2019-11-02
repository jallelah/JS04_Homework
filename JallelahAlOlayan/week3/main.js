let threeMonkeys={

    monkey:"Big Boy",
    species:"Blue monkey",
    foodsEaten:"flowers",

    getMoneky: function (){ console.log("This monkeys name is "+this.monkey+"  and his type is a "+this.species+" and he eats"+this.foodsEaten+" .");

    },
}

threeMonkeys.getMoneky();

let monketTwo=threeMonkeys;
monketTwo.monkey="Baby Boy";
monketTwo.species="Golden monkey";
monketTwo.foodsEaten="eat nuts";

console.log(threeMonkeys);

threeMonkeys.getMoneky();

let monketOne=monketTwo;
monketOne.monkey="Spider Man ";
monketOne.species="Spider monkey";
monketOne.foodsEaten="fruits";

console.log(monketOne);

monketOne.getMoneky();

/*Work with a partner to create a monkey object, which has the following properties:
* name
* species
* foodsEaten
And the following methods:
* eatSomething(thingAsString)
* introduce: producers a string introducing itself, including its name, species, and what it's eaten.
Create 3 monkeys total. Make sure all 3 monkeys have all properties set and methods defined.
Exercise your monkeys by retrieving their properties and using their methods. Practice using both syntaxes
for retrieving properties (dot notation and brackets).
*/