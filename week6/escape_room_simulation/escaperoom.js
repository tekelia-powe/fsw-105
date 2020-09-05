var readlineSync = require('readline-sync');

// ask for player's name
const playerName = readlineSync.question("Please enter your name? ");

const welcomePlayer = `Welcome ${playerName} to my Escape Room Simulation Game.`
console.log(welcomePlayer);

let isAlive = true;
let hasKey = false;

while (isAlive == true)
{
    const menuOptions = readlineSync.keyIn(`Press 1 to Put hand in hole. \nPress 2 to Find the key. \nPress 3 to Open the door.`,{limit: '$<1-3>'});
    if (menuOptions == 1){
        //put hole in hand
        //player dies
        console.log("Sorry. You put your hand in the hole and died. Game is Over!")
        isAlive = false;
    } else if (menuOptions == 2 && hasKey == false) {
        //found key and player does not have key   
        console.log(`Great ${playerName}, you found the key. Continue the game.`)
        hasKey = true;
    } else if (menuOptions == 2 && hasKey == true) {
        //found key and player has key
        console.log(`${playerName}, you already have the key. Please select a different option.`)
    }else if (menuOptions == 3 && hasKey == false) {
        //open the door but does not have the key
        console.log(`${playerName}, you don't have a key. Select another option.`);
        //hasKey = true;
    }else if (menuOptions == 3 && hasKey == true) {
        //open the door but player have the key
            
        console.log(`${playerName}, you already have the key. You have opened the door. Congrats!`)
        isAlive = false;    
    }
}