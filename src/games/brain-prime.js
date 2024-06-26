import getRandomInRange from '../utils.js';
import runEngine from '../index.js';

const isPrime = (numb) => {
  const mas = [
    2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71,
    73, 79, 83, 89, 97,
  ];
  return mas.includes(numb);
};

const generateRound = () => {
  const question = getRandomInRange();
  const answer = isPrime(question) ? 'yes' : 'no';
  return [question, answer];
};

export default () => {
  runEngine(
    'Answer "yes" if given number is prime. Otherwise answer "no".',
    generateRound,
  );
};
