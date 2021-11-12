var products=[{name:"apple",id:1,price:20},{name:"orange",id:2,price:25},{name:"banana",id:3,price:50},
{name:"tomato",id:4,price:50},{name:"onion",id:5,price:50},{name:"guava",id:6,price:50}];
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var billamount=0
function calculate(id,quanity){
    var item = products.find(function(product) {
        if(product.id == id){return true;}
        });
    var originalcost=item.price*quanity
    var gst= originalcost*12/100;
    var netcost= originalcost+gst;
    billamount+=netcost;
    return billamount;
}
function ask(){
    rl.question('Please enter the id :   ', (id) => {
        rl.question('Please enter the quantity :  (type exit to close) ', (quanity) => {
            if(quanity=="exit"){
                rl.close();
            }
            else{
                var result= calculate(id,quanity);
                console.log("The total cost is Rs",billamount);
                ask();
            }
            });
        });
}
ask();
