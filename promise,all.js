function task1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("task1 -> Done")
        }, 2000);
    })
}
function task2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("task2 -> Done")
        }, 3000);
    })
}
function task3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("task3 -> Done")
        }, 1000);
    })
}

Promise.all([
    task1(),
    task2(),
    task3()
])
.then((result) => {
    console.log(result);
    console.log("All tasks Completed");
})
.catch((err)=>{
    console.log(err);
    
})
