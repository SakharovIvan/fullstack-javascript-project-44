import { getRandomInRange } from "../utils.js";
import runEngine from "../index.js";

//Функция проверки числа и ответа на четность

const evenGame = () => {
  let randomNumb = getRandomInRange();
  if (randomNumb % 2 === 0) {
    return [randomNumb, "yes"];
  } else {
    return [randomNumb, "no"];
  }
};

export default () => {
  runEngine(
    `Answer "yes" if the number is even, otherwise answer "no".`,
    evenGame
  );
};
