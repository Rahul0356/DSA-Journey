// write a function that searches for an element in an array and retrun the index, if the element is not present then just return -1

function searchElement(arr,x){
 for (let i=0;i<arr.length; i++){
    if(arr[i] == x){
        return i;
    }
 }

 return -1;

}

let arr = [4,2,8,10,8,30];

let result = searchElement(arr,10);


// searchElement(arr,8) => 0

console.log(result)



// write a function that returns the number of negative numbers in an array

function countNegativeNumbers(arr){

    let count =0;
    for(let i=0;i<arr2.length;i++){
        if(arr[i]<0){
            count = count +1
        }
    }
    return count;
}
let arr2 = [2,-4,6,-8,10,-12,-14,16];
let res = countNegativeNumbers(arr2);
console.log(res);


// write a function that returns the largest number in an array
function findLargest(arr) {
    let largest = -1;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }
    return largest;
}

let arr3 = [4, 2, 8, 10, 30, 6];
let results = findLargest(arr3);
console.log(results); 


// find the second largest number in an array

function secondLargest(arr5){
    let firstLargest = -Infinity;
    let secondLargest = -Infinity;

    for(let i=0;i< arr5.length;i++){
        if(arr5[i]>firstLargest){
            secondLargest = firstLargest;
            firstLargest = arr5[i];
        } else if(arr5[i]>secondLargest){
            secondLargest = arr5[i];
        }
    }
    return secondLargest;
}

let arr5 = [4,2,8,10,30,6];

let resultss = secondLargest(arr5)

console.log(resultss);