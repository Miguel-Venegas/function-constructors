// Function Constructors
// definition: a normal function that is used to construct objects, adding properties and methods

function Person(){
    this.firstName = 'Miguel';
    this.lastName = 'Venegas';
}

let miguel = new Person();
console.log(miguel); // output: Person {firstName: "Miguel", lastName: "Venegas"}

// when we use 'new' keyword before invoking the function, it creates an empty object '{}'
// NOTE: the 'new' keyword is an operator

// when the function is called, the execution context generates a variable called 'this', which points to the function object. However, in the case where you are using the keyword 'new' and invoking the function, the 'this' variable changes its reference. That is, it is now pointing to the empty object that was just created.

// The above example is limited in the sense that it pre-defines the values for firstName and lastName

// here's a better way to write that same function, so as to allow flexibility and customization when constructing new objects

function Person2(firstName, lastName, age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
}

let john = new Person2('John', 'Doe', 33);
let jane = new Person2('Jane', 'Doe', 32); 

console.log(john); // output: Person2 {firstName: "John", lastName: "Doe", age: 33}
console.log(jane); // output: Person2 {firstName: "Jane", lastName: "Doe", age: 32}

// Note: A function has a 'prototype' property (different from __proto__, the prototype of the function object) that can be used to access properties of all current or future objects created with the 'new' keyword or function constructors. Here's an example:

// let's take the Person2 function object that we created

Person2.prototype.getFullName = function(){
    return this.firstName + ' ' + this.lastName;
};

// although originally, getFullName was not part of the Person2 function, now it has been set as a prototype for all objects that were created using the 'new' keyword, thus, we can now use the getFullName method on the object john:

console.log(john.getFullName()); // output: John Doe


// Dangerous Aside: If you don't use the 'new' keyword, that is, you accidentally left it out, it can lead to various 'uncaught references'



