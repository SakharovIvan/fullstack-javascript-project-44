
import {getRandomInRange}  from '../src/utils.js'

const brainProgression = ()=> {
  
        let firstNumber = getRandomInRange() //зайдаем первое чило прогрессии
        let step = getRandomInRange(1,10) //шаг прогрессии
        let position = getRandomInRange(0,9) //позиция отсутвующего элемента
        let mas = []
        const rightAnswer =(position+1)*step+firstNumber
        //наполняем массив
        for (let j=0; j<11; j+=1){
            if (j===position){
                mas[j] = '..'
         }else{
                mas[j] = firstNumber+(j+1)*step
            }
       }
        
       return [mas, rightAnswer]
}

export default brainProgression