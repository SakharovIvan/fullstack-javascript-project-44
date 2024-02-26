import Math from "math"
import { min } from "mathjs";
import readlineSync from 'readline-sync';


const brainGcd = (name)=> {
    console.log(`Find the greatest common divisor of given numbers.`)
    let i = 0
       while (i<3){
        let randomNumb1 = Math.round(Math.random()*100)
        let randomNumb2 = Math.round(Math.random()*100)
        console.log("Question: " + randomNumb1 + "  " + randomNumb2)
        let answer = Number(readlineSync.question("Your answer: "))
        let j=0
        let maxgcd=0
         while (j<=min(randomNumb1,randomNumb2)) {
        if (randomNumb1%j===0 && randomNumb2%j===0) {
            maxgcd = j        
            }
            j+=1
        }
        if (answer===maxgcd) {
            console.log("Correct!")
            i+=1
        }else{
            console.log(`${answer} is wrong answer :(. Correct answer was ${maxgcd}`)
            console.log("Let's try again, "+ name+ " !")
            break
        }
        }

    
        if (i>2) {console.log("Congratulations,"+name+" !")}
}

export default brainGcd