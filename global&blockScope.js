

var x=10

function myfunc(){
    x=20   /// this shows child scope can modify values of globally defined variables.
    // *IMPORTANT* {but if we use initialise it again with var x=20 js reads it with a completely new variable.}

    if(true){
        var a= 5   // var can be accessed globally anywhere.
        let b=10   // this is a block scoped variable which can be accessed inside a block only
    }

    console.log(a)
    console.log(b)

    console.log(`printing x ${x}`);
}

myfunc()