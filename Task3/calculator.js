const args = process.argv.slice(2)
var a= parseInt(args[0]);
var b= parseInt(args[1]);
var x = args[2];
var result;
switch(x){
    case "add":
        result=a+b ;
        break;
    case "sub":
        result=a-b ;
        break;
    case "mul":
        result= a*b;
        break;
    case "div":
        result=a/b;
        break;
    default:
        result="no operation selected";
}
console.log(`result is ${result}`);