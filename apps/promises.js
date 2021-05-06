let testPromise = new Promise((resolve,reject)=>{
    let a = 1+1;
    if (a==2){
        resolve("Sucess")
    }
    else{
        reject("failed")
    }
})

testPromise.then((message)=>{
    console.log(`result from "then":` + message)
}).catch((message)=>{
    console.log(`result from the catch:` + message)
})