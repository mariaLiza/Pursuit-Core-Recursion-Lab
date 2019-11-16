// # Recursion Exercises

// - ### Sum of all from 1 to n

// Write a function that takes in a number as input and recursively finds the sum of 
// all numbers up to and including that number.

// ```js
// input: 6
// output: 21

// //21 = 6 + 5 + 4 + 3 + 2 + 1
// ```

const sumOfAll = (num) => {
    if(num === 0) return 0;
    return num + sumOfAll(num -1)
}
console.log(sumOfAll(6))

// - ### Multiply array

// Write a function called `multArr` that takes in an array of numbers as an argument and 
// recursively multiplies together all of the values in the array.

// ```js
// multArr([2, 3, 5]); // returns 30
// multArr([5, 5, 1, 2]); //returns 50

const multArr = (arr, i =0, prod =1) => {
    if(i>=arr.length) return prod;
    prod *= arr[i]
    i++;
    return multArr(arr, i, prod)
}
console.log(multArr([5,5,1,2]))
