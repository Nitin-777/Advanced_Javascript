/**  Notes -
 *   In js function is treated as a object
 * 
 *  */   


var num1= 10;
var num2=20;

function sum(){
    return num1 + num2;
}

console.log(sum());
console.dir(sum());  //dir helps us to not read the body but also displays us the function as an object
