//start
alert("Welcome to the game Guess the Number! You have one chance to guess a number from 1 to 10.");


let startGame = confirm("Want to start the game?");

// if startgame true
if (startGame) {
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    // enter numer
    let userNumber = prompt("Try to guess a number from 1 to 10:");

    // check correct answer
    if (userNumber !== null && !isNaN(userNumber) && userNumber >= 1 && userNumber <= 10) {
        // check correct answer
        if (parseInt(userNumber) === randomNumber) {
            
            alert("Congratulations! You guessed the number " + randomNumber + "!");
        } else {
            // wrong enter
            alert("Unfortunately, you have guessed the wrong number. The correct answer is.: " + randomNumber + ".");
        }
    } else {
        
        alert("Wrong enter.Enter numer from 1 to 10");
    }
} else {
    
    alert("Maybe some other time. Goodbye!");
}

alert("Thank u for the game!");
