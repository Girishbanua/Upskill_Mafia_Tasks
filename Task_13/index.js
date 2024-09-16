let arr = [2, 3, 7, 5, 11, 1];

//Finding the maximum number in the array
let max = arr[0];
function maxArr(arr){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }        
    }
    return max;
}

console.log("The maximum number in the array is:" + maxArr(arr))


//Calculating the sum of all elements in the array

let sum = 0;

const sumArr = (arr) => {
    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    return sum;
}
console.log("The sum of all elements in the array is:" + sumArr(arr))


//Counting the number of odd numbers in the array

const oddArr = (arr) => {
    let count = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 != 0){
            count++;
        }
    }
    return count;
}

console.log("The number of odd numbers in the array is:" + oddArr(arr))