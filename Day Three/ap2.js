let a = [1,2,3,4,5];
let b = []

let promise = new Promise((resolve,reject)=>{
    setInterval(()=>{
        resolve([1,2,3,4,5])
    },2000)
})
console.log(a.length)
promise.then((array)=>{
    for(var i = 0;i<a.length;i++){
        console.log(array[i]+a[i]);
    }
})