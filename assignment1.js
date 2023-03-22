
// Here is i Created a JavaScript function called "multiplicationTable" that takes a single argument "num" (an integer) as input.
function multiplicationTable(num){
    // Inside the function,here is i created a for loop that iterates from 1 to 10.
    for(let i=1; i<=10; i++){
       let multiplication = num * i;
    // Here Log the product to the console in the format "num x iteration = product".
       console.log(num  +" x " +i +" = " +multiplication);
    
    }

}
let num = 4;
 multiplicationTable(num);
