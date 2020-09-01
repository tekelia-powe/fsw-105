
const age = 101
const name = "John"

function runforLoop(pets){

    const petObjects = []
    
    for (let i=0; i < pets.length; i++){
        const pet = {type: pets[i]}
        let name = "";
        if (pets[i] === "cat"){
            name = "fluffy"
        } else {
            name = "spot"
        }
        console.log("pet name: ", name)
        pet.name = name
        petObjects.push(pet)
        
    }
    
    console.log("man name: ", name)
    return petObjects

    
}
runforLoop(["cat", "dog"]) 

const carrots = ["bright orange","ripe", "rotten"]

mapVegtables = arr => {
return arr.map(carrot => {
    return { type: "carrot", name: carrot}
});

}

console.log(mapVegtables([carrots]));

//Re-write this .filter() using an arrow function:
const people = [

    {
        name: "Princess Peach",
        friendly: false
    },
    {
        name:"Luigi",
        friendly: true
    },
    {
        name:"Mario",
        friendly: true
    },
    {
        name:"Bowser",
        friendly: false
    }
]

filterForFriendly = arr => {

    return arr.filter(person => {
        return person.friendly
    });
}

console.log(filterForFriendly(people));
//Re-write the following functions to be arrow functions:
doMathSum = (a,b) => (a+b)

produceProduct = (a,b) => a*b

//Write a printString function that takes firstName, lastName, and age as parameters and returns a string like the following:
printString = (firstName="Jane", lastName="Doe", age=100) => console.log (`Hi ${firstName} ${lastName}, how does it feel to be ${age}?`)

printString("Kate", "Stark", 40)

//Use the shorthand syntax to make the following filter take up one line
const animal = [

    {
        type: "dog",
        name: "theodore"
    },
    {
        type: "cat",
        name: "whiskers"
    },
    {
        type: "pig",
        name: "piglette"
    },
    {
        type: "dog",
        name: "sparky"
    }

    

];

function filterForDogs(arr){

    
    return arr.filter(animal => {animal.type === "dog" ? true : false})
        }
    

filterForDogs(animal)

printString2 = (Name, location) => console.log (`Hi ${Name}! \nWelcome to ${location}. \nI hope you enjoyed your stay. Please ask the president of ${location} if you need anything.`)

printString2("Janice", "Hawaii")