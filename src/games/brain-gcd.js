import getRandomInRange from '../utils.js';
import runEngine from '../index.js';

const gcd = (numb1, numb2) => {
  while (numb2 !== 0) {
    const temp = numb2;
    numb2 = numb1 % numb2;
    numb1 = temp;
  }
  return numb1;
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
