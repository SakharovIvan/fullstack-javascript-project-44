import { min } from "mathjs";
import { getRandomInRange } from "../utils.js";
import runEngine from "../index.js";

const gcd = (numb1, numb2) => {
  let j = 0;
  while (j <= min(numb1, numb2)) {
    if (numb1 % j === 0 && numb2 % j === 0) {
      return j;
    }
    j += 1;
  }
};

const brainGcd = () => {
  let randomNumb1 = getRandomInRange();
  let randomNumb2 = getRandomInRange();
  let maxgcd = gcd(randomNumb1, randomNumb2);
  const answer = `${randomNumb1}, ${randomNumb2}`
  return [answer, maxgcd];
};

export default () => {
  runEngine(`Find the greatest common divisor of given numbers.`, brainGcd);
};
