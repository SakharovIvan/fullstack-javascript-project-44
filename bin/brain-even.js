import Math from "math"
import readlineSync from 'readline-sync';

//Функция проверки числа и ответа на четность
const evenCheck = (number,answer) => {
if ((number%2===0 && answer==="yes") || (number%2!==0 && answer ==="no")) {
        console.log("Correct!")
        return true
            } else{
            return false
            }
}

const evenGame = (name)=> {
    console.log(`Answer "yes" if the number is even, otherwise answer "no".`)
    let i = 0
       while (i<3){
        let randomNumb = Math.round(Math.random()*100)
        console.log(`Question: ${randomNumb}`)
        let answer =readlineSync.question("Your answer: ")
        if (answer === "exit") {break}
        if (evenCheck(randomNumb,answer)){
        i+=1
        console.log('Correct!')
        console.log(i)
        }else{
            console.log(`Let's try again, ${name}`)
            i=0
            break
        }
    }
    i>2 ? console.log("Congratulations,"+name+" !") : "";
   return 
}

export default evenGame

