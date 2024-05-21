import * as getRandomInRange from '../utils.js';
import runEngine from '../index.js';

const generateProgression = (start, step, length = 7) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + step * i);
  }
  return progression;
};

const generateRound = () => {
  const firstNumber = getRandomInRange();
  const step = getRandomInRange(1, 10);
  const hiddenIndex = getRandomInRange(0, 6);
  const progression = generateProgression(firstNumber, step);
  const answer = progression[hiddenIndex];
  progression[hiddenIndex] = '..';
  const question = progression.join(' ');
  return [question, answer];
};

export default () => {
  runEngine('What number is missing in the progression?', generateRound);
};
