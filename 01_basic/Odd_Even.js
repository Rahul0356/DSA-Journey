// Problem Statement:
// Write a function that accepts a number and checks whether it is Even or Odd. If the number is divisble by 2, it’s an Even number. Otherwise, it’s an Odd number. Test the function with inputs 18 and

// method-1
let number = 11;
if(number%2==0){
    console.log("Even")
}
else {
    console.log("Odd")
}

//  method-2

function CheckNumber (num){
    if(num%2===0){
        console.log("Even")
    }
    else {
        console.log("Odd")
    }
}
CheckNumber(12)
CheckNumber(11)