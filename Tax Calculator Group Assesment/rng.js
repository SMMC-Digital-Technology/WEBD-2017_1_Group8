var number = getRandomInt(0, 100);

var inputGuess;

var outputDisplay = document.getElementById("statement");

function guessMade() {

    inputGuess = document.getElementById("inputGuess").value;

    if (inputGuess < number) {
        outputDisplay.innerHTML = "try a larger number";
        if (number - inputGuess > 30) {
            outputDisplay.innerHTML = "try a even larger number";
        }
    } else if (inputGuess > number) {
        outputDisplay.innerHTML = "try a smaller number";
        if (number - inputGuess > 30) {
            outputDisplay.innerHTML = "try a even smaller number";
        }
    } else {
        outputDisplay.innerHTML = "You have to pay $0";
    }
}

function getRandomInt(min, max) {
    return 50;
    //return Math.floor(Math.random() * (max-min)) + min;
}
