const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function calculate(x,o,y){
    let a=parseInt(x);
    let b=parseInt(y);
    var result;
    switch(o){
        case "+":
            result=a+b ;
            break;
        case "-":
            result=a-b ;
            break;
        case "*":
            result= a*b;
            break;
        case "/":
            result=a/b;
            break;
        default:
            result="no operation selected";
    }
    return result;
}
function ask(){
    rl.question('Please enter first number :   ', (num1) => {
        rl.question('Please enter operation :   ', (operation) => {
        rl.question('Please enter the second number  :  (type exit to close) ', (num2) => {
            if(num2=="exit"){
                rl.close();
            }
            else{
                var out= calculate(num1,operation,num2);
                console.log("The result is ",out);
                ask();
            }
            });
        });
    });
}
ask();