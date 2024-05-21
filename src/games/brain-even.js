import { default as getRandomInRange } from '../utils.js';
import runEngine from '../index.js';

const isEven = (numb) => numb % 2 === 0;

const generateRound = () => {
  const question = getRandomInRange();
  const answer = isEven(question) ? 'yes' : 'no';
  return [question, answer];
};

export default () => {
  runEngine(
    'Answer "yes" if the number is even, otherwise answer "no".',
    generateRound,
  );
};
