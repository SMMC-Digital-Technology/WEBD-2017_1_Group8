var inputPay = document.getElementById("inputPay");
var outputTax = document.getElementById("outputTax");

function buttonPress() {
    var number = numberInput.value;
    if (number < 10) {
        number = number * 10;
    }
    outputLine.value = number;
}