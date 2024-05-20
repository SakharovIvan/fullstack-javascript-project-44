import readlineSync from 'readline-sync';
import nameWelcome from '../src/cli.js';

const roundCount = 3;

const runEngine = (rules, generateRound) => {
  const userName = nameWelcome();
  if (rules === undefined) {
    return;
  }

  console.log(rules);
  for (let i = 0; i < roundCount; i++) {
    const [question, answer] = generateRound();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === 'exit') {
      return;
    }
    if (userAnswer == answer) {
      console.log('Correct!');
    } else {
      console.log(
        `'${userAnswer}' is wrong answer. Correct answer was  '${answer}'`,
      );
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default runEngine;
