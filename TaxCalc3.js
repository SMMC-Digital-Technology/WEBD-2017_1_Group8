
var inputPay = document.getElementById("inputPay");
var outputTax = document.getElementById("outputTax");

function buttonPress() {

    if (inputPay.value < 16000) {

        outputTax.value = 0;
    } else {
        if (inputPay.value < 52500) {
            var bracket2 = (inputPay.value - 16000) * 0.1;
            outputTax.value = bracket2.toFixed(2);
        } else {
            if (inputPay.value < 113000) {
                var bracket3 = (inputPay.value - 52500) * 0.16 + 3650;
                outputTax.value = bracket3.toFixed(2);
            } else {
                if (inputPay.value < 184500) {
                    var bracket4 = (inputPay.value - 113000) * 0.24 + 13330;
                    outputTax.value = bracket4.toFixed(2);
                } else {
                    var bracket5 = (inputPay.value - 184500) * 0.36 + 30490;
                    outputTax.value = bracket5.toFixed(2);
                }
            }
        }
    }
}