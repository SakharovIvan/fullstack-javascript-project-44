import { default as getRandomInRange } from '../utils.js';
import runEngine from '../index.js';

const gcd = (a, b) => {
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
};

const generateRound = () => {
  const randomNumb1 = getRandomInRange();
  const randomNumb2 = getRandomInRange();
  const answer = `${gcd(randomNumb1, randomNumb2)}`;
  const question = `${randomNumb1} ${randomNumb2}`;
  return [question, answer];
};

export default () => {
  runEngine(
    'Find the greatest common divisor of given numbers.',
    generateRound,
  );
};
