
var inputPay = document.getElementById("inputPay");
var outputTax = document.getElementById("outputTax");

function buttonPress() {

    if (inputPay.value < 16000) {

        outputTax.value = 0;
    } else {
        if (inputPay.value < 52500) {
            var bracket2 = (inputPay.value - 16000) * 0.1;
            outputTax.value = bracket2.toFixed(2);
        }
    }
}