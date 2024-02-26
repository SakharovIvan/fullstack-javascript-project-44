#!/usr/bin/env node
import name from '../src/cli.js';
import evenGame from '../bin/brain-even.js'
import calcGame from '../bin/brain-calc.js'
import nodeGame from '../bin/brain-gcd.js'
import progression from '../bin/brain-progression.js'
import prime from '../bin/brain-prime.js'
import readlineSync from 'readline-sync';

const gameSwitch= (game,client)=>{
    switch (game) {
        case ('even-game'):
            evenGame(client)
            break
        case ('calc-game'):
            calcGame(client)
        break
        case ('node-game'):
            nodeGame(client)
            break
        case ('progression'):
            progression(client)
            break
        case ('prime'):
            prime(client)
            break
        default: break
    }
    }

const replay= (replayAnswer)=>{
    replayAnswer = readlineSync.question("Do you want replay?  ");
    if (replayAnswer==="yes"){
    console.log("Select your game \n1) even-game \n2) calc-game \n3) node-game \n4) progression \n5) prime" )
    const game = readlineSync.question("Your selection: ");
    gameSwitch(game,client)
    replay()
}else{return}

}
    
console.log("Welcome to the Brain Games!")
const client = name();
console.log ("Hello, "+client+"!")
console.log("Select your game \n1) even-game \n2) calc-game \n3) node-game \n4) progression \n5) prime" )
const game = readlineSync.question("Your selection: ");
gameSwitch(game,client)
replay() 

