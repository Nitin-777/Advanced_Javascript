/**  Notes -
 *   In js function is treated as a object
 * 
 *  */   


var num1= 10;
var num2=20;

function sum(){
    return num1 + num2;
}

function sum2(){
    return function(){
        return num1 + num2; 
        /* here a function returns a function where it can access variables from its outer function after if executes.
    }
}
                        // any function that reatins variables from its outer scope is called closure.
console.log(sum());
console.dir(sum());  //dir helps us to not read the body but also displays us the function as an object
