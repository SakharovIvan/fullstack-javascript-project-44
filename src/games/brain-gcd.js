import { getRandomInRange } from "../utils.js";
import runEngine from "../index.js";

const gcd = (a, b) => {
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
}
return a;
};

const brainGcd = () => {
  let randomNumb1 = getRandomInRange();
  let randomNumb2 = getRandomInRange();
  let maxgcd = `${gcd(randomNumb1, randomNumb2)}`;
  const answer = `${randomNumb1}, ${randomNumb2}`
  return [answer, maxgcd];
};

export default () => {
  runEngine(`Find the greatest common divisor of given numbers.`, brainGcd);
};
