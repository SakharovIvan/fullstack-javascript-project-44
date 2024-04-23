#!/usr/src/games/env node
import { getRandomInRange } from "../utils.js";
import runEngine from "../index.js";

const progressionWithotNumb =(progressionStart, prgressionStep, absentPosition)=>{
  let mas = [];
  for (let j = 0; j < 11; j += 1) {
    if (j === absentPosition) {
      mas[j] = "..";
    } else {
      mas[j] = progressionStart + (j + 1) * prgressionStep;
    }
  }
  return mas
}

const brainProgression = () => {
  let firstNumber = getRandomInRange(); //зайдаем первое чило прогрессии
  let step = getRandomInRange(1, 10); //шаг прогрессии
  let position = getRandomInRange(0, 9); //позиция отсутвующего элемента
  const rightAnswer = (position + 1) * step + firstNumber;
  const progression = progressionWithotNumb(firstNumber,step,position)

  return [progression, rightAnswer];
};

export default () => {
  runEngine(`What number is missing in the progression?`, brainProgression);
};
