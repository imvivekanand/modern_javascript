//Function in ES6
let x =(x,y,z) => x + y * z;
console.log(x(2,3,4))

//Class in ES6
class Person{
    constructor(name){
        this.name = name;
        // this.gender = gender;
    }
}

const person1 = new Person('Vivek');
const person2 = new Person('Anand');

console.log(person1.name);

//Default Parameter Values
function sum(x,y=5){ //Y has a default parameter
    console.log(x + y)
}

console.log(sum(5,6));
console.log(sum(5));

//Javascript template literals
const first_name = "Vivek";
const last_name = "Anand";
console.log('Hello! ' + first_name + ' ' + last_name);
console.log(`Hello! ${first_name} ${last_name}`);
console.log(`"Hello!" ${first_name} ${last_name}`);

//JavaScript Destructuring
const person = {
    name: 'Vivek',
    age: 26,
    gender: 'Male'
}
let{name, age, gender} = person;
console.log(name);
console.log(age);
console.log(gender);
console.log(person);
// let name = person.name
// let age = person.age
// let gender = person.gender

//JavaScript import and export

function contact(name, age) {
    console.log(`The name is ${name}. And age is ${age}.`);
    }
    
    module.exports = { contact }

//JavaScript Promises

let myPromise = new Promise(function(myResolve, myReject){
    setTimeout(function(){myReolve("I am Vivek Anand"), 300});
});

"complete the code from screeshot"

//setTimeout
function myFunction() {
    console.log(" I love my students")
    }
    setTimeout(myFunction,3000)

//Spread Operator (...)
function show(a, b, ...args){
    console.log(a);
    console.log(b);
    console.log(args);
}
show("one", "two", "three", "four", "five")

//Use Strict
//At the top of code write
'use strict';

// {}: for logic
// (): for calling
// []: for values

// \n - New line