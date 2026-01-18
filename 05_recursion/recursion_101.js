function descresingOrder (num){
if(num === 0)
    return;
    console.log(num)
    descresingOrder(num-1)
}
descresingOrder(10)
