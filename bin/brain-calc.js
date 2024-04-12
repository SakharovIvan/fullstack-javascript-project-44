import {getRandomInRange}  from '../src/utils.js'

const brainCalc = ()=> {
  let randomNumb1 = getRandomInRange();
  let randomNumb2 = getRandomInRange();

  //создаем 3 рандомное значение, в будущем применена логика
  // + = 1
  // - = 2
  // % = 3
  let randomZnak = getRandomInRange(1, 3);

  switch (randomZnak) {
    case 1:
      return [`${randomNumb1}+${randomNumb2}`, randomNumb1 + randomNumb2];
    case 2:
      return [`${randomNumb1}-${randomNumb2}`, randomNumb1 - randomNumb2];
    case 3:
      return [
        `${randomNumb1}/${randomNumb2}`,
        Math.round(randomNumb1 / randomNumb2),
      ];
  }
}
export default  brainCalc

 