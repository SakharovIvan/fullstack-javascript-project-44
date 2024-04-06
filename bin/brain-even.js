
import {getRandomInRange}  from '../src/utils.js'

//Функция проверки числа и ответа на четность

const evenGame = ()=> {
    let randomNumb = getRandomInRange()
    if (randomNumb%2===0) {
        return [randomNumb,"yes"]
            } else{
            return [randomNumb, "no"]
            }
}

export default evenGame

