import Math from "math"
import { min } from "mathjs";
import readlineSync from 'readline-sync';


const brainProgression = (name)=> {
    console.log(`What number is missing in the progression?`)
    let i = 0
       while (i<3){
        let firstNumber = Math.round(Math.random()*100) //зайдаем первое чило прогрессии
        let step = Math.round(Math.random()*10) //шаг прогрессии
        let position = Math.round(Math.random()*10) //позиция отсутвующего элемента
        let rightAnswer = 0
        let mas = []

        //наполняем массив
        for (let j=0; j<11; j+=1){
            if (j===position){
                mas[j] = '..'
                rightAnswer= firstNumber+(j+1)*step
            }else{mas[j] = firstNumber+(j+1)*step}
       }
        console.log("Question: " + mas)
        let answer = Number(readlineSync.question("Your answer: "))
       if (answer===rightAnswer){ 
        console.log('Correct!')
        i+=1
        console.log(i)

       }else{
        console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`)
        break
       }


       }

       i===2 ? console.log("Congratulations,"+name+" !") : "";
       return 
}

export default brainProgression