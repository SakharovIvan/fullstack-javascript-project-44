import { getRandomInRange } from "../src/utils.js";

const brainPrime = () => {
  let checkNumb = getRandomInRange(); //созаем число для проверки
  let mas = [
    2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71,
    73, 79, 83, 89, 97,
  ];
  if (mas.includes(checkNumb)) {
    return [checkNumb, "yes"];
  } else {
    return [checkNumb, "no"];
  }
};

export default brainPrime;
