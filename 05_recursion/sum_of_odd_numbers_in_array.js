let arr = [5,2,6,1,3];

function sum (n){
    let isodd = arr[n] % 2 !== 0;
    if(n === 0)
        return isodd ? arr[0] : 0;
    return (isodd  ? arr[n] : 0) + sum(n-1);
}
console.log(sum(arr.length-1))