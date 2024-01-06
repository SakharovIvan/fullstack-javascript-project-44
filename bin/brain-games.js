#!/usr/bin/env node
import name from '../src/cli.js';
import evenGame from '../bin/brain-even.js'
import calcGame from '../bin/brain-calc.js'
import nodeGame from '../bin/brain-gcd.js'
console.log("Welcome to the Brain Games!")
const client = name();
console.log ("Hello, "+client+"!")
console.log("Select your game \n1) even-game \n2) calc-game \n3) node-game")
const game = name();
switch (game) {
    case 'even-game':
        evenGame(client)
        break
    case 'calc-game':
        calcGame(client)
    break
    case 'node-game':
        nodeGame(client)
        break
    default: break
}

