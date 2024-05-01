#!/usr/src/games/env node
import { getRandomInRange } from "../utils.js";
import runEngine from "../index.js";

//Функция проверки числа и ответа на четность
const isEven = (numb) => numb % 2 === 0;

const evenGame = () => {
  const randomNumb = getRandomInRange();
  const answer = "";
  if (isEven(randomNumb)) {
    answer = "yes";
  } else {
    answer = "no";
  }
  return [randomNumb, answer];
};

export default () => {
  runEngine(
    `Answer "yes" if the number is even, otherwise answer "no".`,
    evenGame
  );
};
