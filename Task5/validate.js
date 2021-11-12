const calculate= require('./calculator');
let calculator= new calculate();
function subtract(req,res){
    let numberParameters = req.params;
    if((isNaN(req.params.numberOne)||(isNaN(req.params.numberTwo)))==true){
        res.status(400).send('ERROR : Please Enter a Valid number');
    }
    else{
        let output = calculator.sub(numberParameters);
        res.json({result:output});
    }
}
function addition(req,res){
    let numberParameters = req.params;
    if((isNaN(req.params.numberOne)||(isNaN(req.params.numberTwo)))==true){
        res.status(400).send('ERROR : Please Enter a Valid number');
    }
    else{
        let output = calculator.add(numberParameters);
        res.json({result:output});
    }
}
function multiplication(req,res){
    let numberParameters = req.params;
    if((isNaN(req.params.numberOne)||(isNaN(req.params.numberTwo)))==true){
        res.status(400).send('ERROR : Please Enter a Valid number');
    }
    else{
        let output = calculator.mul(numberParameters);
        res.json({result:output});
    }
}
function division(req,res){
    let numberParameters = req.params;
    if((isNaN(req.params.numberOne)||(isNaN(req.params.numberTwo)))==true){
        res.status(400).send('ERROR : Please Enter a Valid number');
    }
    else{
        let output = calculator.div(numberParameters);
        res.json({Result:output});
    }
}
module.exports={Subtract:subtract,Addition:addition,Multiplication:multiplication,Division:division};