
//Using if/else if/else statements, JavaScript code in a script tag that takes the sum of two numbers and prints the corresponding result:

//sum + " is less than -1000";
//sum + " is a negative number";
//sum + " is equal to 0";
//sum + " is larger than 0";
//sum + " is greater than 100";




    let num1=-120;
    let num2=-50;
    let sum=num1+num2
    if(sum>100){
        console.log(sum + " is greater than 100")
    }else if(sum>0 && sum<=100){
        console.log(sum + " is greater than 0")
    } else if(sum===0){
        console.log(sum + " is equal to 0")  
    } else {
        console.log(sum + " is a negative number")
    }


