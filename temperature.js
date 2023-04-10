var input = document.getElementById('input');
var result = document.getElementById('result'); 
var inputType = document.getElementById('inputType');
var resultType = document.getElementById('resultType');
var inputTypeValue, resultTypeValue;


input.addEventListener("keyup", myResult);
inputType.addEventListener("change", myResult);
resultType.addEventListener("change", myResult);

inputTypeValue = inputType.value;
resultTypeValue = resultType.value;


function myResult(){

    inputTypeValue = inputType.value;
    resultTypeValue = resultType.value;

    if(inputTypeValue === "Celsius" && resultTypeValue==="Celsius"){
       
        result.value = Number(input.value); // set answer to the result box
    }

    else if(inputTypeValue === "Celsius" && resultTypeValue==="Kelvin"){
       
        result.value = Number(input.value) + 273.15; // set answer to the result box
    }

    else if(inputTypeValue === "Celsius" && resultTypeValue==="Fahrenheit"){
        
        result.value = ((Number(input.value)*9)/5) + 32 ; // set answer to the result box    
    }


    else if(inputTypeValue === "Kelvin" && resultTypeValue==="Celsius"){
       
        result.value = Number(input.value) - 273.15; // set answer to the result box
    }

    else if(inputTypeValue === "Kelvin" && resultTypeValue==="Kelvin"){
       
        result.value = Number(input.value); // set answer to the result box
    }

    else if(inputTypeValue === "Kelvin" && resultTypeValue==="Fahrenheit"){
        
        result.value = ((Number(input.value)-273.15)*0.555556)+32 ; // set answer to the result box    
    }


    else if(inputTypeValue === "Fahrenheit" && resultTypeValue==="Celsius"){
       
        result.value = (Number(input.value)-32) * 0.555556; // set answer to the result box
    }

    else if(inputTypeValue === "Fahrenheit" && resultTypeValue==="Kelvin"){
       
        result.value = ((Number(input.value) - 32) * 0.555556) + 273.15 ; // set answer to the result box
    }

    else if(inputTypeValue === "Fahrenheit" && resultTypeValue==="Fahrenheit"){
        
        result.value = input.value ; // set answer to the result box    
    }


    


    
}