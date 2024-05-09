import { getRandomInRange } from "../utils.js";
import runEngine from "../index.js";

const isEven = (numb) => numb % 2 === 0;

const evenGame = () => {
  const randomNumb = getRandomInRange();
  const answer = isEven(randomNumb) ? "yes" : "no";
  return [randomNumb, answer];
};

export default () => {
  runEngine(
    `Answer "yes" if the number is even, otherwise answer "no".`,
    evenGame
  );
};
