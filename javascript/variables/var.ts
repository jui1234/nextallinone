function VariableDeclaration() {
    // console.log("Variable Declaration",a);
    var a=10;
    console.log("Variable Declaration",a);
    a=30;
    console.log(a);
}

export default VariableDeclaration;

// const defination = " var is functional scope once the var is declare  we can still initialized it again or redeclare it and  if we call vaqr before it is fecae we can still do it bcz of hosting and it will give us undefined but if we call it after it is declared it will give us the value of the variable";