//Preliminaries
if(5>3){
    console.log("is greater than")
}

if("cat".length === 3){
    console.log("is the length")
}

if("cat" === "dog"){

    console.log ("the same")
} else{

    console.log ("not the same")
}
//Bronze

var person = {
    name: "Bobby",
    age: 12
}

var str = person.name;

if (person.age > 18){
    console.log(person.name+" is allowed to go to the Movies.")
} else {
    console.log(person.name+" is not allowed to go to the Movies.")
}

if (str.startsWith("B")){
    console.log(person.name+" is allowed to go to the Movies.")
} else {
    console.log(person.name+" is not allowed to go to the Movies.")
}

if ((person.age > 18) && (str.startsWith("B"))){
    console.log(person.name+" is allowed to go to the Movies.")
} else {
    console.log(person.name+" is not allowed to go to the Movies.")
}

//silver medal
if(1 === "1"){
    console.log("strict")
}else if( 1 == "1"){
    console.log("loose")
} else {
    console.log("not equal at all")
}
   
if(1 <= 2 && 2 === 4){
        console.log("yes")
    } else {
        console.log("no")
    }

//gold medal

if (typeof "dog"){
    console.log("This is a string")
}

if (typeof true){
    console.log ("This is a boolean")
}

var x;
  
    if(typeof x !== 'undefined'){
        console.log(x);
    } else {
        console.log("Variable x is undefined.");
    }

if("s" > 12){
    console.log ("S is greater than 12")
}

var myNum=12;

function getFee() {
    return ((myNum % 2 ==0) ? 'Even' : 'Odd');
  }

console.log (getFee(myNum));