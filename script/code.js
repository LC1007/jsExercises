// =======================================================
//                       Question 1 
// =======================================================

// =======================================================
//                       Variables 
// =======================================================


// A variable is a container that you create and you can place anything inside it eg a string ('this is a string'), a number (0,1,2,3,4) or a boolean (true or false)
// Variable example - let exampleOne = "Question 1"
// exampleOne is the variable

// =======================================================
//                       Value 
// ======================================================= 

// A value is the item that gets placed inside a variable 
// Value example - let exampleTwo = "Question 2"
// "Question 2" is the value 

// =======================================================
//                      Data Types 
// ======================================================= 

// Data types is the type of data that JavaScript understands. It describes the type of data that will be used 
// Examples of Data Types - string, number, boolean, undefined eg


// =======================================================
//                    Initialization 
// ======================================================= 

// Initialization is the process of assigning a value to a variable 
// Example would be - let exampleThree = "Question 1" - this is called Initialization

// =======================================================
//   Tell me the difference between let, var, and const 
// ======================================================= 

// They all share the same concept which is they all store values inside of variables but do have their differences, var is a older version of let and const and we don't use var in todays developement. We just use let and const, with let you can't have more than one variable with the same name eg let test = 3 and let test = 4 this will produce a error, if you do want to change the value (test) then you will have to say test = 4 on the other hand with const you can not change the value after it has been initialized which is where the name const came from (constant). Once a variable has been initialized then you cannot change it. Examples of const would be PI.
// Examples - 

// ⬇️ This will produce an error
// let test = 4
// let test = 5

// ⬇️ This is the correct way
// let test = 4
// test = 5

// ⬇️ Const Examples - The code below will produce an error
// const test = 4
// const test = 5

// ⬇️ This will also produce an error
// const test = 4
// test = 5

// =======================================================
//               What is a variable scope? 
// ======================================================= 

// There are two types of variable scope, we have a global scope and local scope.
// Examples of global and local scopes ⬇️

// ⬇️ This is an example of a local scope, if you initialize a variable inside a function then won't be recognised outside the function so the console.log(word) will be undefined

// function test(){
//     let word = 'hello world'
// }
// console.log(word);

// ⬇️ This is an example of a global scope, this is the opposite of a local scope. With the global scope if I initialize a variable outside the function and call it, then it will be recognised inside the function

//console.log(test) will return 'hello world' because it was initialized in the global scope so it will be recognized everywhere.

// let test = 'hello world'

// function runTest(){
//     console.log(test);
// }
// runTest()

// ===========================================================================
// When can you decide when to use a for, while, forEach and a do while loop? 
// ===========================================================================

// you would use a for loop when you know how much times you want to run a block of code.
// when you want to execute a block of code until a condition is met but you not sure how much times the block of code will run
// you would use a forEach loop when you busy working with arrays and you need to iterate through each value in the array
// when you want to run a block of code once then you do a do while loop


// ===========================================================================
//                 Define hoisting and variable scoping? 
// ===========================================================================

// Hoisting occurs when you declare a variable and then the interpreter moves your variable to the top of the scope they in.
// Variable scoping has two types, the first one is global scope and the second one is local scope. Variables initialized in the global scope will be recognised through out your code but if you initialize a variable inside a function which it then becomes a local scope and this type of variable scoping will only be recognised inside that function

// =======================================================
//                       Question 2 
// =======================================================

let personDetails = {
    firstName: 'Justin',
    lastName: 'Scholtz',
    age: 24,
    listOfSubjects: ['JavaScript','C#','CSS','HTML5','Python'],
    address: {
        streetName: 'Gatesville',
        streetNumber: 58,
        suburb: 'Athlone',
        city: 'Cape Town',
        countryName: 'South Africa'
    }
}

console.log(personDetails);

// =======================================================
//                       Question 3 
// =======================================================

function getResult(){
    let num1 = +document.querySelector('#input1').value
    let num2 = +document.querySelector('#input2').value
    let operator = document.querySelector('#operator').value
    let ans = document.querySelector('#output')

    if(operator == '+'){
        ans.textContent = num1 + num2
    } else if(operator == '-'){
        ans.textContent = num1 - num2
    } else if(operator == '*'){
        ans.textContent = num1 * num2
    } else if(operator == '/'){
        ans.textContent = num1 / num2
    }
}
