//Section A-1: Given an array of numbers, return a new array that has only the numbers that are 5 or greater.
function fiveandGreaterOnly(arr){

const result = arr.filter(function(num) {
if (num >= 5){
    return true;
};
});
return result;
};

//test
console.log(fiveandGreaterOnly([3,6,8,2]))

//Section A-2: Given an array of numbers, return a new array that only includes the even numbers
function evensOnly(arr){

    const result = arr.filter(function(num){

        if (num % 2 == 0){
            return true;
            };
    });
    return result;
}
console.log(evensOnly([3,6,8,2]))
 
//Extra Credit: Make a filtered list of all the people who are old enough to see The Matrix (17+).

function ofAge(arr){

    const result = arr.filter(function(num){

        if(num.age >= 17){
            return true;
        };
    });

    return result;
}
//test
console.log(ofAge([
    {name: "Angelina Jolie", age: 80},
    {name: "Eric Jones", age: 2},
    {name: "Paris Hilton", age: 5},
    {name: "Kanye West", age: 16},
    {name: "Bob Ziroll", age: 100},
    
]));

//Section B-1: Make an array of numbers that are doubles of the first array

function doubleNumbers(arr) {

    const result = arr.map(function(num){
            return num *2;
    });
    return result;
}; 

//test
console.log(doubleNumbers([2,5,10]));

//Section B-2: Take an array of numbers and make them strings
function stringItUp(arr){

    const result = arr.map(function(num){
        return num.toString();
        
    });
        return result;
}
console.log(stringItUp([2,5,100])); 

// Section B-3: Capitalize each of an array of names
function capitilizeNames(arr){

    const result = arr.map(function(num){

        return num.charAt(0).toUpperCase()+ num.slice(1).toLowerCase();
    });
    return result;

}

console.log(capitilizeNames(["john","JACOB","jinGleHimer","schmidt"]))

//EC1: Make an array of strings of the names

function namesOnly(arr){

const result = arr.map(function(num){
    return num.name;
});
    return result;
}

    console.log(namesOnly([
    {name: "Angelina Jolie", age: 80},
    {name: "Eric Jones", age: 2},
    {name: "Paris Hilton", age: 5},
    {name: "Kanye West", age: 16},
    {name: "Bob Ziroll", age: 100},


    ]))

//EC2: Make an array of strings of the names saying whether or not they can go to The Matrix
function makeStrings(arr){

const result = arr.map(function(num){
    if(num.age >=17){
        return num.name + " can go to see the Matrix";
    } else {
        return num.name + "is under age!";
    }
});

return result;

}

console.log(makeStrings([
    {name: "Angelina Jolie", age: 80},
    {name: "Eric Jones", age: 2},
    {name: "Paris Hilton", age: 5},
    {name: "Kanye West", age: 16},
    {name: "Bob Ziroll", age: 100},


]))

//Section C-1: Turn an array of numbers into a total of all the numbers
    function total(arr){
        const result = arr.reduce(function(total, num){
            total += num
            return total
        });
        return result;
    }
console.log(total([1,2,3])); 

//Section C-2: Turn an array of numbers into a long string of all those numbers.
function stringConcat(arr){
    const result = arr.reduce(function(total, num){
        total = total +""+num;
        return total
    });
    return result;
}
console.log(stringConcat([1,2,3])); 
//Section C-3: Turn an array of voter objects into a count of how many people voted

function totalVotes(arr){


const result = arr.reduce(function (total, num){
    return total + num.voted}, 0);

    return result;
}
var voters = [

    {name: 'Bob', age: 30, voted:true},
    {name: 'Jake', age: 32, voted:true},
    {name: 'Kate', age: 25, voted:false},
    {name: 'Sam', age: 20, voted:false},
    {name: 'Phil', age: 21, voted:true},
    {name: 'Ed', age: 55, voted:true},
    {name: 'Tami', age: 54, voted:true},
    {name: 'Mary', age: 31, voted:false},
    {name: 'Becky', age: 43, voted:false},
    {name: 'Joey', age: 41, voted:true},
    {name: 'Jeff', age: 30, voted:true},
    {name: 'Zack', age: 19, voted:false},

];

console.log(totalVotes(voters));

//EC1: Given an array of all your wishlist items, return the total cost of all items
function shoppingSpree(arr){

    const result = arr.reduce(function(total, num){
        total += num.price;
        return total
    },0);
    return result;
}   




var wishlist = [
    {title: "Tesla Modlel S", price: 90000},
    {title: "4 caret diamond  ring", price: 45000},
    {title: "Fancy hacky sack", price: 5},
    {title: "Gold figit spinner", price: 2000},
    {title: "a second Tesla Modlel S", price: 90000},


]
console.log(shoppingSpree(wishlist));

// Section D-1: Given an array of arrays, flatten them into a single array

function leastToGreatest(arr){

const result = arr.sort(function(a,b){

    return a-b;
})
    return result;
}
console.log(leastToGreatest([1,3,5,2,90,20]));

//Section D-2: Sort an array from largest number to smallest
function greatestToLeast(arr){

    const result = arr.sort(function(a,b){
    
        return b-a;
    })
        return result;
    }
    console.log(greatestToLeast([1,3,5,2,90,20]));
 
 //Section D-3: Sort an array from shortest string to longest   
 function lengthSort(arr){

    const result = arr.sort(function(a,b){
    
        return a.length - b.length;
    })
        return result;
    }
    console.log(lengthSort(["dog","wolf","by","family","eaten"]));

//EC1: Sort an array alphabetically

function alphabetical(arr){

    const result = arr.sort()
        
        return result;
    }
    console.log(alphabetical(["dog","wolf","by","family","eaten"])); 