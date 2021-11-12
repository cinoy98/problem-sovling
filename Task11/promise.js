const connection = false;
const promise = new Promise((resolve,reject)=>{
    if(connection){
        resolve("connection established")
    }
    else{
        reject("connection failed")
    }
})
promise.then((message)=>{
    console.log(message)
}).catch((message)=>{
    console.log(message)
})