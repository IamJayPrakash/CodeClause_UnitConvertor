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

    if(inputTypeValue === "meter" && resultTypeValue==="centimeter"){
       
        result.value = Number(input.value) * 10000; // set answer to the result box
    }

    else if(inputTypeValue === "meter" && resultTypeValue==="kilometer"){
       
        result.value = Number(input.value) * 0.000001; // set answer to the result box
    }

    else if(inputTypeValue === "meter" && resultTypeValue==="meter"){
        
        result.value = input.value ; // set answer to the result box    
    }

    else if(inputTypeValue === "meter" && resultTypeValue==="inch"){
        
        result.value = Number(input.value) * 1550; // set answer to the result box
    }

    else if(inputTypeValue === "meter" && resultTypeValue==="feet"){
        
        result.value = Number(input.value) * 10.764; // set answer to the result box
    }




    else if(inputTypeValue === "centimeter" && resultTypeValue==="meter"){
        
        result.value = Number(input.value) * 0.0001; // set answer to the result box
    }

    else if(inputTypeValue === "centimeter" && resultTypeValue==="kilometer"){
       
        result.value = Number(input.value) * 0.0000000001; // set answer to the result box
    }

    else if(inputTypeValue === "centimeter" && resultTypeValue==="centimeter"){
        
        result.value = Number(input.value); // set answer to the result box
    }

    else if(inputTypeValue === "centimeter" && resultTypeValue==="inch"){
         
        num = Number(input.value)/ 6.4516;
        result.value = num.toFixed(2);  // set answer to the result box
    }

    else if(inputTypeValue === "centimeter" && resultTypeValue==="feet"){
       
        result.value = Number(input.value) * 0.00108;
          // set answer to the result box
    }



    else if(inputTypeValue === "kilometer" && resultTypeValue==="meter"){
        
        result.value = Number(input.value) * 1000000; // set answer to the result box
    }

    else if(inputTypeValue === "kilometer" && resultTypeValue==="kilometer"){
       
        result.value = Number(input.value); // set answer to the result box
    }

    else if(inputTypeValue === "kilometer" && resultTypeValue==="centimeter"){
        
        result.value = Number(input.value) * 10000000000; // set answer to the result box
    }

    else if(inputTypeValue === "kilometer" && resultTypeValue==="inch"){
       
        num = Number(input.value)* 1,550,003,100.0062;
        result.value= num.toFixed(3);  // set answer to the result box
    }

    else if(inputTypeValue === "kilometer" && resultTypeValue==="feet"){
        
        result.value = Number(input.value) * 10763915; // set answer to the result box
    }




    else if(inputTypeValue === "inch" && resultTypeValue==="meter"){
       
        num = Number(input.value) * 0.00064516; // set answer to the result box
        result.value = num.toFixed(3);
    }

    else if(inputTypeValue === "inch" && resultTypeValue==="kilometer"){
       
        result.value = Number(input.value)/1550003100.0062; // set answer to the result box
    }

    else if(inputTypeValue === "inch" && resultTypeValue==="centimeter"){
       
        result.value = Number(input.value) * 6.4516; // set answer to the result box
    }

    else if(inputTypeValue === "inch" && resultTypeValue==="inch"){
        
        result.value = Number(input.value); // set answer to the result box
    }

    else if(inputTypeValue === "inch" && resultTypeValue==="feet"){
         
        result.value = Number(input.value)/0.007; // set answer to the result box
    }



    else if(inputTypeValue === "feet" && resultTypeValue==="meter"){
       
        result.value = Number(input.value) * 0.09290304; // set answer to the result box
    }

    else if(inputTypeValue === "feet" && resultTypeValue==="kilometer"){
       
        result.value = Number(input.value) * 0.0000000929; // set answer to the result box
    }

    else if(inputTypeValue === "feet" && resultTypeValue==="centimeter"){
       
        result.value = Number(input.value) * 929.03; // set answer to the result box
    }

    else if(inputTypeValue === "feet" && resultTypeValue==="inch"){
        
        result.value = Number(input.value) * 144; // set answer to the result box
    }

    else if(inputTypeValue === "feet" && resultTypeValue==="feet"){
         
        result.value = Number(input.value); // set answer to the result box
    }

    


    
}