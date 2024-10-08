// setTimeout(() => {
//     console.log("this is timeout");
    
// }, 1000);
// console.log("this is second");
// console.log("this is last");

// for (let index = 0; index < 10; index++) {
//     console.log("time consuming task", index);
    
    
// }
// console.log("im bottom text ");

// setTimeout(() => {
//     console.log("do something");
    
// }, 1000);
// try {
//     let firstName = "ram"
//     let lastName = "thapa"
//     let fullName = firstName +' '+lastName
//     console.log(fullName);
    
// } catch (error) {
//     console.log(err.message);
    
// }
// promise resolve and reject
let promise = new Promise((resolve, reject)=>{
    setTimeout(() => {
        // reject("internal server error")
        resolve({
            data:{
                name: "rory",
                email: "rory1@gmail.com"
            }
        })
    }, 3000);
   
})
promise.then((response)=>{
    console.log("response", response);
})
.catch((err)=>{
    console.log("error",err);
    
})
console.log(promise);
