#!/usr/bin/env node
import nameWelcome from "../src/cli.js";
import evenGame from "../bin/brain-even.js";
import calcGame from "../bin/brain-calc.js";
import nodeGame from "../bin/brain-gcd.js";
import progression from "../bin/brain-progression.js";
import prime from "../bin/brain-prime.js";
import readlineSync from "readline-sync";

const roundCount = 1;

const runEngine = (rules, generateRound) => {
  console.log(rules);
  for (let i = 0; i < roundCount; i++) {
    let [question, answer] = generateRound();
    console.log(question);
    const cliAnswer = readlineSync.question("Your answer: ");
    if (cliAnswer === "exit") {
      return;
    }
    if (cliAnswer === answer.toString()) {
      console.log("Correct!");
    } else {
      console.log(`Correct answer is  ${answer}`);
      return;
    }
  }
  console.log(`Congratulations  ${client}!`);
};

const gameSwitch = () => {
  
  const client = nameWelcome();
    console.log(
    "Select your game \n1) even-game \n2) calc-game \n3) node-game \n4) progression \n5) prime"
  );
  const game = readlineSync.question("Your selection: ");
  switch (game) {
    case "even-game":
      runEngine(
        `Answer "yes" if the number is even, otherwise answer "no".`,
        evenGame
      );
      break;
    case "calc-game":
      runEngine(`What is the result of the expression?`, calcGame);
      break;
    case "node-game":
      runEngine(`Find the greatest common divisor of given numbers.`, nodeGame);
      break;
    case "progression":
      runEngine(`What number is missing in the progression?`, progression);
      break;
    case "prime":
      runEngine(
        `Answer "yes" if given number is prime. Otherwise answer "no".`,
        prime
      );
      break;
    default:
      break;
  }
  const replayAnswer = readlineSync.question(
    `Do you want replay?  Answer "yes" or "no": `
  );
  if (replayAnswer === "yes") {
    gameSwitch();
  }
  return;
};


gameSwitch();
console.log(`Good luck! See you next time!`);
