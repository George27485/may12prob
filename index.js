//Using if/else statements, create a JavaScript code in a script tag that follows the following rules:

//If the value is truthy, print true;
//If the value is falsy, print the corresponding result:
//"The boolean value false is falsy";
//"The null value is falsy";
//"undefined is falsy";
//"The number 0 is falsy (the only falsy number)";
//"The empty string is falsy (the only falsy string)";


const value= "i am string"

    if(value==true){
        console.log("true")
    } else if(value === false){
        console.log("the boolean value is falsy")
    } else if(value === null){
        console.log("the null value is falsy")
    } else if(value=== undefined){
        console.log("undefined is falsy")
    } else if( value === 0){
        console.log("the number 0 is falsy")
    } else if(value === ""){
        console.log("the empty string is falsy")
    }


