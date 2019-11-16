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

// Write a function called `concatArr` that takes 
// in an array of strings as an argument and recursively concatenates 
// the strings together into a single string, with spaces between each 
// original string.

// ```js
// concatArr(['is', 'it', 'tomorrow']); // returns 'is it tomorrow'
// concatArr(['or', 'just', 'the', 'end', 'of', 'time']); //returns '
// or just the end of time'

const concatArr = (arr, i = 0, result = "") => {
    if(i >= arr.length) return result
    result += arr[i] + " "
    i++
    return concatArr(arr,i,result)
}
console.log(concatArr(["or", "just", "the", "end", "of", "time"]))

// Write a function called `sumEvens` that takes in an array of numbers 
// as an argument and recursively sums only the even numbers in the array.

// ```js
// sumEvens([2, 3, 5, 6]); // returns 8
// sumEvens([10, 5, 1, 2, 12]); //returns 24

const sumEvens = (arr, i = 0, sum = 0) => {
    if(i >= arr.length) return sum;
    if(arr[i] % 2 === 0){
        sum += arr[i]
    }
    i ++
    return sumEvens(arr, i, sum)
}
console.log(sumEvens([2, 3, 5, 6]))

// - ### Recursive range

// Write a function called `range` which takes in two numbers (num1, num2) as arguments. The function should return an array of numbers between num1 and num2.

// ```js
// range(2,10); // returns [2, 3, 4, 5, 6,7, 8, 9, 10]
// range(17,20); // returns [17, 18, 19, 20]
// ```}

const range = (num1,num2, Arr=[])=>{
    if(Arr[Arr.length-1] === num2) return Arr;
    Arr.push(num1)
    return range(num1+1,num2,Arr)
}
console.log(range(2,10)); // returns [17, 18, 19, 20]