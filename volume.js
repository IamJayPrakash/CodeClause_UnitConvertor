var input = document.getElementById('input');
var result = document.getElementById('result');
var inputType = document.getElementById('inputType');
var resultType = document.getElementById('resultType');
var inputTypeValue,
    resultTypeValue;

input.addEventListener("keyup", myResult);
inputType.addEventListener("change", myResult);
resultType.addEventListener("change", myResult);

inputTypeValue = inputType.value;
resultTypeValue = resultType.value;

function myResult() {

    inputTypeValue = inputType.value;
    resultTypeValue = resultType.value;

    if (inputTypeValue === "liter" && resultTypeValue === "liter") {

        result.value = Number(input.value); // set answer to the result box
    } else if (inputTypeValue === "liter" && resultTypeValue === "centimeter") {

        result.value = Number(input.value) * 1000; // set answer to the result box
    } else if (inputTypeValue === "liter" && resultTypeValue === "meter") {

        result.value = Number(input.value) / 1000; // set answer to the result box
    } else if (inputTypeValue === "liter" && resultTypeValue === "mililiter") {

        result.value = Number(input.value) * 1000; // set answer to the result box
    } else if (inputTypeValue === "centimeter" && resultTypeValue === "liter") {

        result.value = Number(input.value) * 0.001; // set answer to the result box
    } else if (inputTypeValue === "centimeter" && resultTypeValue === "centimeter") {

        result.value = Number(input.value); // set answer to the result box
    } else if (inputTypeValue === "centimeter" && resultTypeValue === "meter") {

        result.value = Number(input.value) / 1000000; // set answer to the result box
    } else if (inputTypeValue === "centimeter" && resultTypeValue === "mililiter") {

        result.value = Number(input.value); // set answer to the result box
    } else if (inputTypeValue === "mililiter" && resultTypeValue === "liter") {

        result.value = Number(input.value) * 0.001; // set answer to the result box
    } else if (inputTypeValue === "mililiter" && resultTypeValue === "centimeter") {

        result.value = Number(input.value); // set answer to the result box
    } else if (inputTypeValue === "mililiter" && resultTypeValue === "meter") {

        result.value = Number(input.value) / 1000000; // set answer to the result box
    } else if (inputTypeValue === "mililiter" && resultTypeValue === "mililiter") {

        result.value = Number(input.value); // set answer to the result box
    } else if (inputTypeValue === "meter" && resultTypeValue === "liter") {

        result.value = Number(input.value) * 1000; // set answer to the result box
    } else if (inputTypeValue === "meter" && resultTypeValue === "centimeter") {

        result.value = Number(input.value) * 1000000; // set answer to the result box
    } else if (inputTypeValue === "meter" && resultTypeValue === "meter") {

        result.value = Number(input.value); // set answer to the result box
    } else if (inputTypeValue === "meter" && resultTypeValue === "mililiter") {

        result.value = Number(input.value) * 1000000; // set answer to the result box
    }

}