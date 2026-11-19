const Lexicalscope=()=>{
    const a=10;

    function outer(){
        const b=20;
        console.log(a)

        function inner(){
            console.log(b)
            console.log(a)
        }
        inner();
    }
    outer();

}

Lexicalscope();