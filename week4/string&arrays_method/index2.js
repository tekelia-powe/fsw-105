var fruit = ["banana","apple","orange","watermelon"];
var vegtables = ["carrot","tomato", "pepper","lettuce"];

//console.log("fruit:", fruit);


function manipulateArray(){
    //removes last item from vegtable array
    vegtables.pop();
    
    //removes first item from fruit array
    fruit.shift();
    
    //find the index of orange
    var num = fruit.indexOf("orange");
    
    //add the index of orange (num) to the fruit array
    fruit.push(num);
    
    //find length of vegtable array
    var num2 = vegtables.length;
    

    // add the length of vegtable array (num2) to vegtable array
    vegtables.push(num2);
    

    //create a new array combine the 2 arrays
    var food = fruit.concat(vegtables);
    

    //remove 2 elements from array starting at index 4
    food.splice(4,2);
    

    //reverse array
    food.reverse();
    console.log(food);

}
manipulateArray();
