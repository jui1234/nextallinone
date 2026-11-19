const Closer=function(){
    var a=10;

    function inner(){
        a++;
        console.log(a);
        return a;
    }

   return inner;//here  inner is done executed 
}

const result=Closer()();//  and here we have finish calling outer 

console.log("result",result)

// defination :The inner function remembers the variables from its outer function even after the outer function has finished executing and returned the inner function.