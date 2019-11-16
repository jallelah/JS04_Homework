
//Q3. Use the following data to solve the problems below.


var aquarium = {
    filledWithWater: true,
    capacityInGallons: 12,
    numberOfRocks: 5,   
};

var fishOne={type:'goldfish',size:'3.5 inches',color:'golden'};
var fishTwo={type:'puffer',size:'4 inches',color:'tan'};   
var fishThree={type:'clown',size:'3 inches',color:'orange'};
var newFishOne={type:'clown',size:'4 inches',color:'orange'};
var newFish={type:'starfish',size:'5 inch',color:'blue'};


function fish (type, size, color){
    this.type=type;
    this.size=size;
    this.color=color; 
} 


//1.access the value of the capacityInGallons key
console.log(aquarium.capacityInGallons);
//2.add 2 rocks to the numberOfRocks in the aquarium
console.log(aquarium.numberOfRocks+2);
//3.access the clown fish and print the object.

console.log(fishThree);

//4.access the size of the puffer fish.
console.log(fishTwo.size);

//5.your goldfish grew! Access the size key of goldfish and reassign it to '4 inches'.
console.log(newFishOne);
//6.you bought a new fish! Make a new object for a '5 inch' long, blue starfish and add it to the fish array.
console.log(fishOne,fishTwo,newFishOne,newFish);

