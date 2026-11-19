function hositingvar(){
    console.log(a);
    var a;/// so here if we call var before it is declare it give me hoisted as it store the varable and function dercalre before execition of code
    
}
function hoistedlet(){
    console.log(b);
    let b;// it is also hoisted but it storte in TDZ
}

function hoistedconst(){
    // console.log(c);
    // const c;//it is also hoisted but store in TDZ
}


// defination: it knows about the variable and function declaration before executing of code