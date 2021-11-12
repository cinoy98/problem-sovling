var largestString="";
var largestLength=0;
function searchPallindrom(string){
    for(var i=0 ; i<string.length ; i++){
        sub= string.substr(i, string.length);
        for(var j= string.length;j>=0;j--){
            sub2= sub.substr(0,j);
            if(sub2.length>=2){
                pallindrom(sub2)
                }  
            }
        }   
    }
function pallindrom(Substring){
    let temp = Substring.split("")
    let reversed=temp.reverse();
    let reversedString = reversed.join("");
    if((Substring== reversedString)&&(Substring.length>=largestLength)){
            largestLength=Substring.length;
            largestString=Substring;
            }
    }
var str= process.argv[2];
searchPallindrom(str);
console.log("largest pallindrom is :"+largestString,largestLength);