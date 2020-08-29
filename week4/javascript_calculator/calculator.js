const readline = require("readline-sync")
var result = 0;

function mySum(num1, num2){
    result = num1 + num2;
    console.log("The result is: "+result);
}

function myProduct(num1, num2){
    result = num1 * num2;
    console.log("The result is: "+result);
}

function myQuotient(num1, num2){
    result = num1 / num2;
    console.log("The result is: "+result);
}

function myDifference(num1, num2){
    result = num1 - num2;
    console.log("The result is: "+result);
}

var num1 = readline.questionInt('Please enter your first number: ');
var num2 = readline.questionInt('Please enter your second number: ');
var operation = readline.question('Please enter the operation to perform - add, sub, mul, div: ');


if(operation == "add"){
    mySum(num1,num2);
}else if(operation == "sub"){
    myDifference(num1,num2);
}else if(operation == "mul"){
    myProduct(num1,num2);
}else if(operation == "div"){
    myQuotient(num1,num2);
}