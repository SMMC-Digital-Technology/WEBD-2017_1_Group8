var nameInput = document.getElementById("inputText");
var outputLine = document.getElementById("outputTag");
var numberInput = document.getElementById("inputNumber");

function buttonPress() {
    var number = numberInput.value;
    if (number < 10) {
        number = number * 10;
    }
    outputLine.value = number;
}