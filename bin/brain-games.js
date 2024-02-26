#!/usr/bin/env node
import name from '../src/cli.js';
import evenGame from '../bin/brain-even.js'
import calcGame from '../bin/brain-calc.js'
import nodeGame from '../bin/brain-gcd.js'
import progression from '../bin/brain-progression.js'
import prime from '../bin/brain-prime.js'
import readlineSync from 'readline-sync';

console.log("Welcome to the Brain Games!")
const client = name();
console.log ("Hello, "+client+"!")
console.log("Select your game \n1) even-game \n2) calc-game \n3) node-game \n4) progression \n5) prime" )
const game = readlineSync.question("Your selection: ");
switch (game) {
    case ('even-game'||"1"):
        evenGame(client)
        break
    case ('calc-game'||"2"):
        calcGame(client)
    break
    case ('node-game'||"3"):
        nodeGame(client)
        break
    case ('progression'||"4"):
        progression(client)
        break
    case ('prime'||"5"):
        prime(client)
        break
    default: break
}

