import readlineSync from "readline-sync";
import nameWelcome from "../src/cli.js";

const roundCount = 1;

const runEngine = (rules, generateRound) => {
 const clien = nameWelcome() 
 if(rules===undefined){return}
 
  console.log(rules);
  for (let i = 0; i < roundCount; i++) {
    let [question, answer] = generateRound();
    console.log(question);
    const cliAnswer = readlineSync.question("Your answer: ");
    if (cliAnswer === "exit") {
      return;
    }
    if (cliAnswer === answer) {
      console.log("Correct!");
    } else {
      console.log(`${cliAnswer} os wrong answer. Correct answer is  ${answer}`);
      console.log(`Let's try again ${clien}`)
      return;
    }
  }
  console.log(`Congratulations!`);
};

export default runEngine

