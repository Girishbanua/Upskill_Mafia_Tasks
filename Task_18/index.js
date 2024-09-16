//Question 1
//given aray of numbers, use map function with an arrow function to square each element of the array

// let arr = [21, 12, 31, 40, 29];
// let squaredArray = arr.map((x) => x * x);
// console.log(squaredArray);

//Question 2

// function to take student's score as parameter and return their grade (A, B, C, D, E, F) using a series of ternary operators

// const Grade = (scores) => {
//     let grade = scores >= 90 ? "A" : scores >= 80 ? "B" : scores >= 70 ? "C" : scores >= 60 ? "D" : scores >= 50 ? "E" : "F";
//     return grade;
// }

//Question 3

// let Car = {
//     name: "BMW",
//     model: "X5",
//     color: "blue",
//     year: 2020
// }
// console.log(Car);
// const changeYear = (year) => {
//     Car.year = year;
//     console.log(Car);
// }
// // object destructuring to extract and print car's model and year
// const {model, year} = Car
// console.log(`Model: ${model} Year: ${year}`)

//Question 4
/*
Given an array of numbers, use the filter function to creare a new array of prime numbers

 let arr = [2, 22, 27, 3, 32, 7, 9, 5, 11, 51, 91];

 let prime = arr.filter((x) => {
     for (let i = 2; i < x; i++) {
         if (x % i == 0) {
            return false;
        }
    }
    return x > 1;
})

console.log(`original array: ${arr} \nprime numbers: ${prime}`)*/

//Question 5

/*state different use cases of map, filter and reduce functions

map function: creates a new array with the results of calling a function for every array element
 let arr = [21, 12, 31, 40, 29];
 let squaredArray = arr.map((x) => x * x);
 console.log(squaredArray);

filter function: creates a new array with all elements that pass the test implemented by the provided function
 let arr = [2, 22, 27, 3, 32, 7, 9, 5, 11, 51, 91];

 let prime = arr.filter((x) => {
     for (let i = 2; i < x; i++) {
         if (x % i == 0) {
             return false;
         }
     }
     return x > 1;
 })

 console.log(`original array: ${arr} \nprime numbers: ${prime}`)

reduce function: reduces the array to a single value
const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];
const count = fruits.reduce((acc, fruit) => {
    acc[fruit] = (acc[fruit] || 0) + 1;
    return acc;
}, {});
console.log(count); 
*/

//Question 6

// const fetchData = async () => {
//     const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
//     const data = await response.json();
//     console.log(data);
// }

// fetchData();

//Question 7


// const person = {
//     name: 'Girish',
//     address: {
//       street: '8th Street',
//       city: 'Bhubaneswar',
//     },
//     contact: {
//       phone: '123-456-7890',
//     },
//   };
  
//   console.log(person?.contact?.phone);
 