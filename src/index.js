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
  console.log(`Congratulations!`);
};

export default runEngine

