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

    if (inputTypeValue === "hour" && resultTypeValue === "hour") {

        result.value = Number(input.value); // set answer to the result box
    } else if (inputTypeValue === "hour" && resultTypeValue === "minute") {

        result.value = Number(input.value) * 60; // set answer to the result box
    } else if (inputTypeValue === "hour" && resultTypeValue === "second") {

        result.value = Number(input.value) * 3600; // set answer to the result box
    } else if (inputTypeValue === "minute" && resultTypeValue === "hour") {

        result.value = Number(input.value) / 60; // set answer to the result box
    } else if (inputTypeValue === "minute" && resultTypeValue === "minute") {

        result.value = Number(input.value); // set answer to the result box
    } else if (inputTypeValue === "minute" && resultTypeValue === "second") {

        result.value = Number(input.value) * 60; // set answer to the result box
    } else if (inputTypeValue === "second" && resultTypeValue === "hour") {

        result.value = Number(input.value) / 3600; // set answer to the result box
    } else if (inputTypeValue === "second" && resultTypeValue === "minute") {

        result.value = Number(input.value) / 60; // set answer to the result box
    } else if (inputTypeValue === "second" && resultTypeValue === "second") {

        result.value = Number(input.value); // set answer to the result box
    }

}