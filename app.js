// function Person(name, dob){
//  this.name = name;
//  //this.age = age;
//  this.birthday = new Date(dob);
//  this.calculateAge = function(){
//      const diff = Date.now()-this.birthday.getTime();
//      const ageDate = new Date(diff);
//      return ageDate.getUTCFullYear() - 1970;
//  }
// }

// const raja = new Person('raja', 30);
// const rani = new Person('rani', 26);
// const brad = new Person('brad', '1998/06/06');
// console.log(brad.calculateAge());


/// BUILT IN CONSTRUCTORS

// //Prototype Explained

// function Person(firstName, lastName, dob){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.birthday = new Date(dob);
//     this.calculateAge = function(){
//         const diff = Date.now()-this.birthday.getTime();
//         const ageDate = new Date(diff);
//         return Math.abs(ageDate.getUTCFullYear() - 1970);
//     }
// }
// // Person.prototype.calculateAge = function(){
// //     const diff = Date.now()-this.birthday.getTime();
// //     const ageDate = new Date(diff);
// //     return Math.abs(ageDate.getUTCFullYear() - 1970);
// // } 

// Person.prototype.getFullName = function(){
//     return(`${this.firstName} ${this.lastName}`);
// }
// const john = new Person('Jhon', 'Deo', '12-6-1970');
// console.log(john.getFullName());



// Prototype Inheritance

// function Person(firstName, lastName){
//         this.firstName = firstName;
//         this.lastName = lastName;
// }

// Person.prototype.greetings = function greetings(){
//     return (`Hello ${this.firstName} ${this.lastName} How Are You?`);
// }


// Customer.prototype = Object.create(Person.prototype);
// Customer.prototype.constructor = Customer; 


// const person1 = new Person('jhon', 'deo');
// console.log(person1.greetings());

// function Customer(firstName, lastName, phone, membership){
//     Person.call(this, firstName, lastName);
//     this.phone = phone;
//     this.membership = membership;
// }

// const Customer1 = new Customer('tom', 'smith', 0762183532, 'normal');
// console.log(Customer1);
// Customer.prototype.greetings = function(){
//     return (`Hello ${this.firstName} ${this.lastName} How Are You? This is our Company`);
// }

// console.log(Customer1.greetings());

// USING OBJECT.CREATE

// const personPrototypes = {
//     greeting : function(){
//         return `Hello there ${this.firstName} ${this.lastName}`;
//     },

//     getsMarried : function (newName){
//      this.lastName = newName;
//     }
// }

// // const mary = Object.create(personPrototypes);
// // mary.firstName = 'Mary';
// // mary.lastName = 'Willams';
// // mary.age = '30';

// // mary.getsMarried('Ashok');

// // console.log(mary.greeting());

// const brad = Object.create(personPrototypes, 
//     {
//         firstName: {value: 'Brad'}, 
//         lastName: {value: 'Trvaesy'}, 
//         age: {value: 30}
//     }
// );

// brad.getsMarried('dff');

// console.log(brad.greeting());


//SUB CLASSES 

// class Person {

//     constructor(firstName, lastName){
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }

//     greeting (){
//             return(`${this.firstName} ${this.lastName}`);
//         }
// }

// class Customer extends Person {
//     constructor(firstName, lastName, phone, membership){
//         super(firstName, lastName);
//         this.phone = phone;
//         this.membership = membership;
//     }

//     static getMember(){
//         return 500;
//     }
// }

// const jhon = new Customer('jhon', 'raja', '5555555', 'normal');
// console.log(jhon.greeting());
// console.log(Customer.getMember());



// While purchasing certain items, a discount of 10% is offered if the quantity purchased is more than 1000.
// If the quantity and price per item are input, write a program to calculate the total expenses.

// var input = window.prompt("enter value");


// if(input > 1000){
//     var discount = input*0.1
//     var final = input-discount;
//     console.log(final)
// }
// alert(final);


//LIFT


var person1  = 6;
var person2  = 2;
var person3  = 7;
function lift(){
    if(person1 < person2 && person1 < person3   ){
        console.log(`its gng to ${person1}th floor`);
}else if(person2 < person3 && person2 < person1   ){
    console.log(`its gng to ${person2}th floor`);
}else if(person3 < person2 && person3 < person1   ){
    console.log(`its gng to ${person3}th floor`);
}  
}
console.log(lift()) 