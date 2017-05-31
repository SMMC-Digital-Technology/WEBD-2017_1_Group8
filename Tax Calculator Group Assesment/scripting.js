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

/* function buttonPress() {
    var name = nameInput.value;
    
    if (name.startsWith("S") || name.startsWith("s")) {
        name = name + " snake";
    } else if (name.startsWith("D")) {
        name = name + " dolphin";
    } else if (name.startsWith("d")) {
        name = name + " dinosaur";
    } else {
        name = name + " cat";
    }
    
    outputLine.value = "Hello " + name;
} */
