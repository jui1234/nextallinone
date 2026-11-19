function TDZ(){
    console.log(a);// enter the scope (TDZ start here )
    let a=10;//end here 
}

// TDZ is the time period between entering a scope and the point where a let or const variable is initialized.

// During this period, you cannot access that variable. If you try, JavaScript throws a ReferenceError.