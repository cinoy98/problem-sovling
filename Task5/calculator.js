class calculate {
    add(numberParameters) {

        let num1=parseInt(numberParameters.numberOne);
        let num2=parseInt(numberParameters.numberTwo);
        let result = ( num1 + num2 )
        return result
    }
    sub(numberParameters) {
        let num1 = parseInt(numberParameters.numberOne) ;
        let num2 = parseInt(numberParameters.numberTwo) ;
        let result = ( num1 - num2 )
        return result
    }
    mul(numberParameters) {
        let num1 = parseInt(numberParameters.numberOne) ;
        let num2 = parseInt(numberParameters.numberTwo) ;
        let result = ( num1 * num2 )
        return result
    }
    div(numberParameters){
        let num1 = parseInt(numberParameters.numberOne) ;
        let num2 = parseInt(numberParameters.numberTwo) ;
        let result = ( num1 / num2 ) ;
        return result
    }
}
module.exports = calculate;