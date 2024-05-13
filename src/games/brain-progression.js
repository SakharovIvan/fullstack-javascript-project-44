import { getRandomInRange } from "../utils.js";
import runEngine from "../index.js";

const generateProgression = (start, step, length = 7) => {
  const progression = [];
  for (let i = 0; i < length; i++) {
    progression.push(start + step * i);
  }
  return progression;
};

const generateRound = () => {
  const firstNumber = getRandomInRange(); 
  const step = getRandomInRange(1, 10); 
  const hiddenIndex = getRandomInRange(0, 9); 
  const question = generateProgression(firstNumber, step);
  const answer = question[hiddenIndex + 1];
  question[hiddenIndex] = "..";
  return [question, answer];
};

export default () => {
  runEngine(`What number is missing in the progression?`, generateRound);
};
