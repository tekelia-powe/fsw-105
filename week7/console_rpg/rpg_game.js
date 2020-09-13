const readlineSync = require('readline-sync');

const name = readlineSync.question('What is your name? ');

readlineSync.question('Hello '+ name +'. Welcome to the Enchanted Forest. Choose the right options to help Goldilocks escape. Press enter to begin.');
const badguys = ['The Big Bad Wolf','Papa Bear', 'Mama Bear','Baby Bear'];
const treasure = ['Bag of Gold','Bowl of Porridge','Perfect Purple Mattress','Lazy Boy Recliner'];
var prize = [];
let userHealth = 40;
const options = ['Walk','Exit','Print'];
let pickUp = treasure[Math.floor(Math.random()*treasure.length)];

function game(){
    //const attackPower = Math.floor(Math.random() * (5-4+3)+5);
    const badguy = badguys[Math.floor(Math.random() * badguys.length)];
    let badGuyHealth = 40;
    //const badGuyPower = Math.floor(Math.random() *(5-3+2)+5);

    const move = readlineSync.keyInSelect(options, 'What would you like to do?');

    if (options[move] == 'Exit'){
        console.log('Goodbye '+name+'.');
        return userHealth = 0;
    } else if (options[move] == 'Print'){
        console.log(name + ' Inventory:\n -------------------\nHealth: '+userHealth+'\nTreasure: '+pickUp);
    } else if (options[move] === 'Walk'){
        let key = Math.random();
        if (key <= 0.3){
            console.log('Walking, Walking ...... ');
        }else if (key >= 0.3) {
            console.log('Oh no! '+badguy+' showed up!');
            while (badGuyHealth > 0 && userHealth > 0) {
                const user = readlineSync.question('What do you want to do now? Enter "r" to run and "a" to attack: ');

                
                    if(user === 'r'){
                        const run = (1+Math.random());
                        if (run < 1.5){
                            console.log('Before you can run away '+badguy+ ' attacks you!');
                            
                        } else{
                            console.log('You ran away!');
                            break;
                        }
                    }else if(user ==='a'){
                        const attackPower = Math.floor(Math.random() * (5-4+3)+5);
                        badGuyHealth -= attackPower;
                        console.log('You attacked '+badguy+ ' with '+attackPower+' power pellets. '+badguy+'\'s Remaining Health: '+badGuyHealth);
                        const badGuyPower = Math.floor(Math.random() *(5-3+2)+5);
                        userHealth -= badGuyPower;
                        console.log('Enemy just attacked you with: '+badGuyPower+' power pellets. '+name+'\'s Remaining Health: '+userHealth);
                        
                        if (badGuyHealth <=0){
                            console.log('You killed '+badguy+', \n'+badguy+ ' left you a '+pickUp);
                            let loot = Math.random();
                            if (loot <=0.3){
                                prize.push(pickUp);
                            } 
                            }else if(userHealth <=0){
                                console.log(badguy+ ' has defeated you. You are dead!');
                            }
                        }
                    }
            }
        }
    }
while (userHealth > 0){
    userRestore= function(){
        userActive = true;
        userHealth = 40;
    };
    userRestore();
    game();
}


