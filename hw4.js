// Homework 4

// This homework assignment will give you practice working with objects. 
// All problems will be based on the object definition below.


// Object: Athlete

// Properties: 
// name
// height
// age
// country of origin
// medals
// is the athelete an Olympian? (hint: Boolean)

// Methods (i.e. functions): 

// introduce = returns 'Hello! My name is _______ and I am from ________'. Fill in the blanks with the values name and country of origin, respectively.

// addMedal = This takes a string as a parameter and adds it to the array of medals. It does not return anything.


// Problem 1
// Create the object above by setting the properties one by one.


var athlete1 = {};
// athlete.foo = "bar"
// athlete.method = function () {
// 
// }



// Problem 2
// Create the object using the associate array syntax (i.e. strings within square brackets).


var athlete2 = {};
// athlete['foo'] = "bar"
// athlete['method'] = function () {
// 
// }



// Problem 3
// Create the same object using ONE object literal


var athlete3 = {
	// set key/value pairs inside here
};



// Problem 4
// Create a prototype for athelete. See below for examples:
// https://github.com/galdamez/ca276-fall2013/blob/master/week8/prototypes.html



// PROBLEM BELOW IS OPTIONAL

// Problem 5
// Create a prototype that inherits from Athlete. Pick from any of the types below:
// TennisPlayer
// TableTennisPlayer
// Swimmer
// Sprinter
// …or make your own!
// 
// This new prototype definition will add one method that returns a string message. It will also add a property unique to this type of athlete.
// 
// You get to decide how to define these.
// 
// For example I may want to have a Swimmer type that does the following.
// 
// Parameters in order are: name, age, country, height (in meters), medals, is he an Olympian?, preferred brand
// 
// var s1 = new Swimmer('Michael Phelps', 28, 'USA', 1.93 ['gold', 'gold', 'silver'], true, 'Speedo');
// 
// The last property, preferred brand, is the one I added.
// 
// Method below returns 'Splash splash splash!'
// 
// s1.swim();