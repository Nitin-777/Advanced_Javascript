

   var x=20 //  global value of x is determined as window object directly as it is a property of browser. can be accessed using window.x

   console.log(x) 

   function myfunc(){
     var y=10 // cnat be accessed outside myfunc function
   }