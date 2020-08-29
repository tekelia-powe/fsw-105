var peopleWhoWantToSeeMadMaxFuryRoad = [
    {
        name: "Mike",
        age: 12,
        gender: "male"
    },{
        name:"Madeline",
        age: 80, 
        gender: "female"
    },{
        name: "Cheryl",
        age: 22,
        gender: "female"
    },{
        name: "Sam",
        age: 30,
        gender: "male"
    },{
        name: "Suzy",
        age: 4,
        gender: "female"
    }
]

//Loops through array and prints "old enough" if 18 or older and "not old enough" if not
for (var i=0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++){
    if(peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18){
        console.log("old enough");
    }else if(peopleWhoWantToSeeMadMaxFuryRoad[i].age < 18){
        console.log("Not old enough");
    }
}

//Loops through array and prints a more personal message after checking if 18 or older or not
for (var i=0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++){
    if(peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18){
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name+" is old enough see Mad Max.");
    }else if(peopleWhoWantToSeeMadMaxFuryRoad[i].age < 18){
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name+" is not old enough see Mad Max.");
    }
}

//loops through array and checks to see if the movie goer is a male or female and prints personalized message
for (var i=0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++){
    if((peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18) && (peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "female")){
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name+" is old enough. SHE's good to see Mad Max Fury Road.");
    }else if((peopleWhoWantToSeeMadMaxFuryRoad[i].age < 18) && (peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "female")){
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name+" is not old enough to see Mad Max Fury Road, don't let HER in.");
    }else if((peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18) && (peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "male")){
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name+" is old enough. HE's good to see Mad Max Fury Road.");
    }else if((peopleWhoWantToSeeMadMaxFuryRoad[i].age < 18) && (peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "male")){
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name+" is not old enough to see Mad Max Fury Road, don't let HIM in.");
    }
}

//loop that iterates through 101 numbers and prints even/odd based on number
for(var i=0; i<=100;i++){
    
    if(i%2){
        console.log("Even")
  } else if (i%3){
      console.log("Odd")
  }
  
}

//Extra Credit: Loops through array, calculates the sum and toggle button based on the sum of the array
var button = "off";
var sum = 0;
var lightSwitch = [2,5,435,4,3];
for (var i=0; i<lightSwitch.length; i++){
    
    sum = sum + lightSwitch[i];
    
}
if(sum%2){
    button = "on"
}else if (sum%3){
    button = "off"
}

console.log("The button toggles the light "+sum+" times so the light is "+button+".")

//EC sample array 2
var button = "off";
var sum = 0;
var lightSwitch = [1,1,1,1,3];
for (var i=0; i<lightSwitch.length; i++){
    
    sum = sum + lightSwitch[i];
    
}
if(sum%2){
    button = "on"
}else if (sum%3){
    button = "off"
}

console.log("The button toggles the light "+sum+" times so the light is "+button+".")

//EC sample array 3
var button = "off";
var sum = 0;
var lightSwitch = [9,3,4,2];
for (var i=0; i<lightSwitch.length; i++){
    
    sum = sum + lightSwitch[i];
    
}
if(sum%2){
    button = "on"
}else if (sum%3){
    button = "off"
}

console.log("The button toggles the light "+sum+" times so the light is "+button+".")