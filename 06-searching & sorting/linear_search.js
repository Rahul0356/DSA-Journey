let arr = [2,4,5,3,6,];

function linearSearch (arr, target){
    for(let i=0; i,arr.length;i++){
        if(arr[i] === target){
            return i;
        }
    }
    return -1;
}
let result = linearSearch(arr,6);
console.log(result);