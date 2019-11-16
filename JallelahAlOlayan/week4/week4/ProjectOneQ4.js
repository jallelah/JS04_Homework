//Q4. The following JSON object has been provided to you in data.js:
let data = {
    "people": [
      {
          "name": "Luke Skywalker",
          "height": "172",
          "mass": "77",
          "hair_color": "blond",
          "skin_color": "fair",
          "eye_color": "blue",
          "birth_year": "19BBY",
          "gender": "male"
      }, {
          "name": "C-3PO",
          "height": "167",
          "mass": "75",
          "hair_color": "n/a",
          "skin_color": "gold",
          "eye_color": "yellow",
          "birth_year": "112BBY",
          "gender": "n/a"
      }, {
          "name": "R2-D2",
          "height": "96",
          "mass": "32",
          "hair_color": "n/a",
          "skin_color": "white, blue",
          "eye_color": "red",
          "birth_year": "33BBY",
          "gender": "n/a"
      }, {
          "name": "Darth Vader",
          "height": "202",
          "mass": "136",
          "hair_color": "none",
          "skin_color": "white",
          "eye_color": "yellow",
          "birth_year": "41.9BBY",
          "gender": "male"
      }, {
          "name": "Leia Organa",
          "height": "150",
          "mass": "49",
          "hair_color": "brown",
          "skin_color": "light",
          "eye_color": "brown",
          "birth_year": "19BBY",
          "gender": "female"
      }
  ] 
 } 

 module.exports = JSON.stringify(data);
//This JSON object contains one key value pair, which holds an array of objects. This array of objects is the data we are after.

//What to do?

//3.Create a main.js file and write the following functions

//Write a function that console.logs each character object in the data.
//let logData = function() {
//}
//Write a function that console.logs each character's name
//let logNames = function() {
//};
//Write a function that console.logs each character's name and eye color
//let logNameEyes = function() {
//};
//Write a function that console.logs each character's name whose mass is greater than 75
//let logByMass = function() {
