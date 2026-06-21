async function startApp() {

console.log("Checking login")
function loginUseer() {
    return new Promise((resolve, reject)=>{
    setTimeout(() => {
       resolve("Login successful")
    }, 2000);
});
}

function fetchprofile(){
    return new Promise((resolve, reject)=> {
        setTimeout(() => {
            resolve("Profile loaded")
        }, 2000);
    })
}

function fetchpost(){
return new Promise((resolve, reject)=> {
    setTimeout(() => {
        reject("faild to Load post");
    }, 2000);
})
}

try{
    let loginMessage = await loginUseer();
    console.log(loginMessage);

    let profileMessage = await fetchprofile();
    console.log(profileMessage);

    let posetMessage = await fetchpost();
    console.log(posetMessage);


}
catch (err){
    console.log(err);
}

}

startApp();



