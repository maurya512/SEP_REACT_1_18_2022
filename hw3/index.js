// ! create personalized map method 

// * map creates a new array from calling a function for every array element
// * calls a function once for each element in an array

// Array.map(function(currentValue, index, arr), thisValue) 

const array1 = [1, 2, 3, 4, 5];

// ! custom array prototype method that takes in a callback function
Array.prototype.myMap = (cb) => {
    // ! initialize a new empty array
    let newArr = [];
    // ! looping through the original arrary and pushing each element into the new array
    for (let i = 0; i < this.length; i++) {
        newArr.push(cb(this[i]));
    }

    // ! returning the new array
    return newArr;
}

// * logging the contents of the new array
console.log('Map: ', newArr);

// ******************************************************** // 

// ! create a personalized filter method 

// * filter method creates a new array filled with elements that pass a test provided by a function 
// * filter method does not execute the function for empty elements 

// ! array.filter(function(curentValue, index, arr), thisValue)
// ! only function and currentValue are required

// ! creating a custom prototype function that takes in a callback function as a parameter
Array.prototype.myFilter = (cb) => {
    // ! intializing a new empty array ; can be with the same name since in a different scope
    let newArr = [];
    // ! looping over each element of an array to check if the number is odd or even
    for (let i = 0; i < this.length; i++) {
        if (cb[i] % 2 === 0) {
            // ! if the number is found to be even we push that element into the new array
            newArr.push(this[i]);
        }
    }
    // ! return the new array
    return newArr;
}

// * logging the new array
console.log('Filter: ', newArr);

// ******************************************************** // 

// ! creating a custom reduce method using array prototype method

// * method returns a single value: the function's accumulated result

// ! array.reduce(function(total, currentValue, currentIndex, arr), initalValue)
// ! function, total and currentValue are required 

// ! custom reduce method using prototype and have a call back function and an initial value as a parameters
Array.prototype.myReduce = (cb, initialValue = 0) => {
    // ! initializing the result as the initialValue
    let result = initialValue;
    // ! looping through all the elements of an array and adding them to the result
    for (i = 0; i < this.length; i++) {
        result += cb(this[i]);
    }
    // ! returning the result
    return result;
}

// * logging the result;
console.log('Reduce: ', result);

// ******************************************************** // 
// ! some method using array prototypes 

// * some method checks if an array elements pass a test
// * some method executes the function once for each array element
// * if the function returns true, some returns true and stops and vice versa

// ! array.some(function(value, index, arr) , this);

// ! custom some method using array prototype method that takes in a callback function as a parameter
Array.prototype.mySome = (cb) => {
    // ! looping through all the elements in an array 
    for (let i = 0; i < this.length; i++) {
        // ! checking if any element is odd
        if (cb[i] % 2 === 0) {
            return true
        }
        else {
            return false
        }
    }
};

// ******************************************************** // 
// ! custom every method using array prototype method
// ! every method executes a function for each array element
// ! every method returns true if the function returns true for all elements
// ! every method returns false if the function returns false for all elements 

Array.prototype.myEvery = (cb) => {
    for (let i = 0; i < this.length; i++) {
        if (cb[i] >= 5) {
            return true
        }
        else {
            return false
        }
    }
};