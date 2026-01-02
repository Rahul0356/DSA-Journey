// Problem Statement:
// Write a program that accepts a number (age) and checks whether the person is eligible to vote. A person is eligible if their age is 18 or more.


let age = 25;
if(age >= 18){
    console.log("You are able")
}
else {
    console.log("You are not able")
}

// Method-2

function ageAble (age){
    if(age>=18){
        console.log("You are able")
    }
    else {
        console.log("You are  not able")
    }
}
ageAble(12)