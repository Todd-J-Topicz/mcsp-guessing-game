//create global object that holds all global accessible data:
let gameData = {
    name: "",
    secret: 0,
    counter: 1,
    guesses: [],

};

let leaderBoardObj = {};

//Generates random number 0-100;
function genRandoNum(){
    let answer = Math.floor(Math.random()*(101));
    return answer;

}

//Alerts and prompts for user to guess a number.
function guessInt(){
    console.log(`trueapp.js is running`);
    //Clean slate for next play through, generate new random number assign to global object gameData:
    gameData.secret = genRandoNum();
    //Clean slate for next play through, start at 1 (assumes initial guess):
    gameData.counter = 1;
    //Clean slate for next play through, generates blank array for global object gqmeData.guesses:
    gameData.guesses = [];
    console.log(`This is the secret number: ${gameData.secret}`);
    //Introduction block - prompts/alerts to derive username:
    alert("Welcome to the number guessing game.");
    //Assign user input name to global variable gameData.name:
    gameData.name = prompt("Who will be playing the number guessing game today?")
    alert(`Welcome ${gameData.name}! Let's play a number guessing game...`)
    
      
    //Input validation variable defined and set to true:
    let condition = true;

    //While loop to continue if condition = true
    while (condition){
        //variable to call funciton numberGuess:
        const result = numberGuess();
        //Alerts return from function numberGuess:
        alert(result);

        //Check for correct answer, if answer is correct do all the following:
        if (result === `CORRECT!`){
            //condition = false;
            alert(`CONGRATULATIONS ${gameData.name}!!! You guessed correctly with ${gameData.counter} attempt(s)`);
            alert(`${gameData.name}'s guesses on the way to the answer:\n ${gameData.guesses}`); 
            //Call function leaderboard:
            console.log(gameData.counter);
            console.log(leaderBoardObj);
            leaderboard();
            //Need to display leaderboard results:
            alert(`SCOREBOARD:\n` + (Object.entries(leaderBoardObj)));   
            return playAgain();
            
        } 
        
    }
  
};

function numberGuess(){
    //Variable to hold user input (convert string to a number):
    let userSelectedNum = prompt("Please guess a number 0 - 100");
    let guessNum = parseInt(userSelectedNum);
    console.log(`You guessed ${guessNum}`)

    //Input validation conditions:
    //First if invalidates ANYTHING/EVERYTHING outside of 0-100.
    if (guessNum >= 0 && guessNum <=100){
        if (guessNum < gameData.secret){
            gameData.counter++;
            gameData.guesses.push(guessNum);
            return `${gameData.name}, your guess is low. Please guess higher....`;
        } else if (guessNum > gameData.secret){
            gameData.counter++;
            gameData.guesses.push(guessNum);
            return `${gameData.name}, your guess is high. Please guess lower...`
        } else {
            gameData.guesses.push(guessNum);
            return `CORRECT!`;     
        }
    } else {
            alert(`!!Invalid entry, outside of limits!!`)
            numberGuess();
        }
             
    }

    



//Create a function that asks do you want to play again, and cycles back through game:
function playAgain(){
    let playGameAgain = prompt(`Would you like to play again ${gameData.name}? Enter Y or N`);

    if (playGameAgain === "Y" || playGameAgain === "y"){
        return guessInt();
    } else if (playGameAgain === "N" || playGameAgain === "n"){
        alert(`Thank you for playing ${gameData.name}. See you next time.`)
    } else {
        return playAgain(); 
    }
}


function leaderboard(){
    //Checks name input into leaderBoardObj:
    //console.log(leaderBoardObj);
    
    //Check to see if key exists in leaderBoardObj:
    //If its NOT exist, add key to object with value of present gameData.counter:
    if (!(gameData.name in leaderBoardObj)){
        leaderBoardObj[gameData.name] = gameData.counter;
        //console.log(`LeaderboardObj` + leaderBoardObj);

    //If it does exist in key, and current value is greater than gameData.counter, re-assign key value to gameData.counter:
    } else {
        if (leaderBoardObj[gameData.name] > gameData.counter){
            leaderBoardObj[gameData.name] = gameData.counter;
       } 
       
       //console.log(`LeaderboardObj second else statement` + leaderBoardObj);
    }
    //Checks leaderBoardObj at end of function run through
    console.log(leaderBoardObj);
};



guessInt();