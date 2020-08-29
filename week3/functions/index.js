//function that accepts two numbers as parameters, and returns the sum
function mySum(num1, num2){
    return num1 + num2;
}

//function that accepts three numbers as parameters, and returns the largest of those numbers.
function largestNum(num1, num2, num3){
    {
        max_val = Math.max(num1, num2, num3);
        return max_val;
      }
}

//function that accepts one number as a parameter, and returns whether that number is even or odd.
function evenOrOdd(num){

    if(num%2 == 0){
        return "Number is even"
    }else if (num%2 == 1){
        return "Number is odd"
    }
}

//function that accepts a string as a parameter. If the length of the string is less than or equal to twenty characters long, return the string concatenated with itself (string + string). If the string is more than twenty characters long, return the first half of the string
function printString(str){

    if(str.length <= 20){
        return str+str
    }else{
        var str2 = str.length/2;
        return str.substring(0, str2);
    }
}

//call functions and prints to console
console.log(mySum(2,5));console.log(mySum(12,15));
console.log(largestNum(10,8,2));
console.log(largestNum(25,48,12));
console.log(evenOrOdd(55));
console.log(evenOrOdd(20));
console.log(printString("Tekelia Powe"));
console.log(printString("My name is Tekelia Powe"));
