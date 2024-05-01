#!/usr/src/games/env node
import { getRandomInRange } from "../utils.js";
import runEngine from "../index.js";

const generateProgression = (start, step, length = 11) => {
  const progression = [];
  for (let i = 0; i < length; i++) {
    progression.push(start + step * i);
  }
  return progression;
};

const brainProgression = () => {
  let firstNumber = getRandomInRange(); //зайдаем первое чило прогрессии
  let step = getRandomInRange(1, 10); //шаг прогрессии
  let hiddenIndex = getRandomInRange(0, 9); //позиция отсутвующего элемента
  const progression = generateProgression(firstNumber, step);
  const rightAnswer = progression[hiddenIndex + 1];
  progression[hiddenIndex] = "..";
  return [progression, rightAnswer];
};

export default () => {
  runEngine(`What number is missing in the progression?`, brainProgression);
};
