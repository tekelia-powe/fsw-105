/* 
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
runforLoop(["cat", "dog"]) */

/* const carrots = ["bright orange","ripe", "rotten"]

mapVegtables = arr => {
return arr.map(carrot => {
    return { type: "carrot", name: carrot}
});

} */

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

function filterForFriendly (arr) {

    return arr.filter(function(person){
        return person.friendly
    })
}