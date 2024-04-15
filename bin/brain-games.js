#!/usr/bin/env node
import nameWelcome from "../src/cli.js";
import evenGame from "../src/games/brain-even.js";
import calcGame from "../src/games/brain-calc.js";
import nodeGame from "../src/games/brain-gcd.js";
import progression from "../src/games/brain-progression.js";
import prime from "../src/games/brain-prime.js";
import readlineSync from "readline-sync";

const gameSwitch = () => {
  console.log(
    "Select your game \n1) even-game \n2) calc-game \n3) node-game \n4) progression \n5) prime"
  );
  const game = readlineSync.question("Your selection: ");
  switch (game) {
    case "even-game":
      evenGame();
      break;
    case "calc-game":
      calcGame();
      break;
    case "node-game":
      nodeGame();
      break;
    case "progression":
      progression();
      break;
    case "prime":
      prime();
      break;
    default:
      break;
  }
  return;
};

nameWelcome();
gameSwitch();
console.log(`Good luck! See you next time!`);
