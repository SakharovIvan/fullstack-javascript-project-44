import Math from "math"
import { elementaryChargeDependencies, min } from "mathjs";
import readlineSync from 'readline-sync';


const brainPrime = (name)=> {
    console.log(`Answer "yes" if given number is prime. Otherwise answer "no".`)
    let i = 0
       while (i<3){
        let checkNumb = Math.round(Math.random()*100) //созаем число для проверки 
        let mas = [2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97]
        let rightAnswer =""
        //проводим проверку на простое число
        for (let j=0; j<mas.length; j+=1){
            if (checkNumb===mas[j]){
                rightAnswer = "yes"
       }else{rightAnswer = "no"}
    }

        console.log("Question: " + checkNumb)
       let answer = readlineSync.question("Your answer: ")
       if (answer===rightAnswer){ 
        console.log('Correct!')
        i+=1
       }else{
        console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`)
        break
       }


       }

    
   return i===2 ? console.log("Congratulations,"+name+" !") : "";

}

export default brainPrime