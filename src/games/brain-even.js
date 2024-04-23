#!/usr/src/games/env node
import { getRandomInRange } from "../utils.js";
import runEngine from "../index.js";

//Функция проверки числа и ответа на четность
const isEven = (numb)=>{numb % 2 === 0}

const evenGame = () => {
  let randomNumb = getRandomInRange();
  if (isEven(randomNumb) ) {
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
