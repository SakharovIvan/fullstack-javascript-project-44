import readlineSync from 'readline-sync';

const name=userName => {
    userName=readlineSync.question('May I have your name?:') 
    return userName};
export default name