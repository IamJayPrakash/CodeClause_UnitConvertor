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

    if(inputTypeValue === "kilogram" && resultTypeValue==="kilogram"){
       
        result.value = Number(input.value); // set answer to the result box
    }


    else if(inputTypeValue === "kilogram" && resultTypeValue==="gram"){
       
        result.value = Number(input.value) * 1000; // set answer to the result box
    }

    else if(inputTypeValue === "kilogram" && resultTypeValue==="miligram"){
        
        result.value = Number(input.value) *1000000 ; // set answer to the result box    
    }

    else if(inputTypeValue === "kilogram" && resultTypeValue==="pounds"){
        
        result.value = Number(input.value) * 2.2; // set answer to the result box
    }


    else if(inputTypeValue === "gram" && resultTypeValue==="kilogram"){
       
        result.value = Number(input.value)/1000; // set answer to the result box
    }

    else if(inputTypeValue === "gram" && resultTypeValue==="gram"){
       
        result.value = Number(input.value); // set answer to the result box
    }

    else if(inputTypeValue === "gram" && resultTypeValue==="miligram"){
        
        result.value = Number(input.value) *1000 ; // set answer to the result box    
    }

    else if(inputTypeValue === "gram" && resultTypeValue==="pounds"){
        
        result.value = Number(input.value) * 0.0022; // set answer to the result box
    }



    else if(inputTypeValue === "miligram" && resultTypeValue==="kilogram"){
       
        result.value = Number(input.value)/1000000; // set answer to the result box
    }
   

    else if(inputTypeValue === "miligram" && resultTypeValue==="gram"){
       
        result.value = Number(input.value)/1000; // set answer to the result box
    }

    else if(inputTypeValue === "miligram" && resultTypeValue==="miligram"){
        
        num = Number(input.value) ; // set answer to the result box  
        result.value = num.toFixed(2);  
    }

    else if(inputTypeValue === "miligram" && resultTypeValue==="pounds"){
        
        num = Number(input.value)/453592.37; // set answer to the result box
        result.value = num.toFixed(2);
    }



   
    else if(inputTypeValue === "pounds" && resultTypeValue==="kilogram"){
       
        num = Number(input.value)* 0.45359237 ; // set answer to the result box
        result.value = num.toFixed(2);
    }

    else if(inputTypeValue === "pounds" && resultTypeValue==="gram"){
       
        num = Number(input.value)*453.592; // set answer to the result box
        result.value = num.toFixed(2);
    }

    else if(inputTypeValue === "pounds" && resultTypeValue==="miligram"){
        
        num = Number(input.value)*453,592.37 ; // set answer to the result box 
        result.value = num.toFixed(2);   
    }

    else if(inputTypeValue === "pounds" && resultTypeValue==="pounds"){
        
        result.value = Number(input.value); // set answer to the result box
    
    }
   

    



    
}