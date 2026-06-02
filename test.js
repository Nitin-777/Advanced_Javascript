
   var x=20 //  global value of x is determined as window object directly as it is a property of browser. can be accessed using window.x

   console.log(x) 

   function myfunc(){
     var y=10 // cnat be accessed outside myfunc function.

     console.log(`Printing value of x: ${x} `)
   }

   myfunc()
   console.log(`Printing value of y ${y}`) // this gives reference error as js could'nt find y variable in global scope