
var a = 10;

function doSomthing(){
    console.log(this.a);
    console.log("Hey vijay i am doing somthing");
}

doSomthing();
console.log(a);
console.log(doSomthing);
