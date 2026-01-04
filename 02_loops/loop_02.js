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