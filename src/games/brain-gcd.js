import { min } from "mathjs";
import { getRandomInRange } from "../utils.js";
import runEngine from "../index.js";

const brainGcd = () => {
  let randomNumb1 = getRandomInRange();
  let randomNumb2 = getRandomInRange();
  let j = 0;
  let maxgcd = 0;
  while (j <= min(randomNumb1, randomNumb2)) {
    if (randomNumb1 % j === 0 && randomNumb2 % j === 0) {
      maxgcd = j;
    }
    j += 1;
  }
  return [`${randomNumb1} & ${randomNumb2}`, maxgcd];
};

export default () => {
  runEngine(`Find the greatest common divisor of given numbers.`, brainGcd);
};
