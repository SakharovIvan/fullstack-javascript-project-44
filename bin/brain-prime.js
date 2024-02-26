import Math from "math"
import { elementaryChargeDependencies, min } from "mathjs";
import readlineSync from 'readline-sync';


const brainPrime = (name)=> {
    console.log(`Answer "yes" if given number is prime. Otherwise answer "no".`)
    let i = 0
       while (i<3){
        let checkNumb = Math.round(Math.random()*100) //созаем число для проверки 
        let mas = [2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97]
        let correctAnswer = ""
        console.log("Question: " + checkNumb)
        
        if (mas.includes(checkNumb)){correctAnswer ="yes"}else{correctAnswer ="no"}

        let clientAnswer = readlineSync.question("Your answer: ")
       if (clientAnswer===correctAnswer){ 
        console.log('Correct!')
        i+=1
       }else{
        console.log(`'${clientAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`)
        break
       }
       }
       
       if (i>2) {console.log("Congratulations,"+name+" !")}

}

export default brainPrime