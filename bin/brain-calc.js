import Math from "math"
import readlineSync from 'readline-sync';

const brainCalc = (name)=> {
    console.log(`What is the result of the expression?`)
    let i = 0
       while (i<3){
        let randomNumb1 = Math.round(Math.random()*100)
        let randomNumb2 = Math.round(Math.random()*100)
        //создаем 3 рандомное значение, в будущем применена логика
        // + = 1
        // - = 2
        // % = 3
        let randomZnak = Math.round((Math.random()*10)/3,2)
        //Проводим проверку на суммирование
        if (randomZnak===1) {
            console.log("Question: " + randomNumb1 + "+" + randomNumb2)
            let answer = Number(readlineSync.question("Your answer: "))
            if (randomNumb1+randomNumb2===answer) {
                i+=1
                console.log('Correct!')
                console.log(i)
            }else{
                console.log(`${answer} is wrong answer :(. Correct answer was ${randomNumb1+randomNumb2}`)
                console.log("Let's try again, "+ name+ " !")
                break
            }
        }
        //Проводим проверку на разницу
        if (randomZnak===2) {
            console.log("Question: " + randomNumb1 + "-" + randomNumb2)
            let answer = Number(readlineSync.question("Your answer: "))
            if (randomNumb1-randomNumb2===answer) {
                i+=1
                console.log('Correct!')
                console.log(i)
            }else{
                console.log(`${answer} is wrong answer :(. Correct answer was ${randomNumb1-randomNumb2}`)
                break
            }
        }
        //Проводим проверку на деление
        if (randomZnak===3) {
            console.log("Question: " + randomNumb1 + "/" + randomNumb2)
            let answer = Number(readlineSync.question("Your answer: "))
            if (Math.round(randomNumb1/randomNumb2)===answer) {
                i+=1
                console.log('Correct!')
                console.log(i)        
            }else{
                console.log(`${answer} is wrong answer :(. Correct answer was ${randomNumb1/randomNumb2}`)
                break
            }
        }
   
    }
    i===2 ? console.log("Congratulations,"+name+" !") : "";
    return 
}

export default brainCalc