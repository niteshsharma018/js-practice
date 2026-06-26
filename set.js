// console.log('Loading Script.. ');


// function loadScript(src){
//     return new Promise((resolve, reject) =>{
//      let Script = document.createElement("script");
     
//      Script.src = src;

//      script.onload = ()=> {
//         resolve("Script load successfully");
//      };

//      script.onerror = ()=> {
//         reject("Failed to load Script");
//      }

//      document.body.appendChild(script);
//     });
// }

// loadScript("script2.js")
// .then((result) => {
//     console.log(result);
//     alert("Script Loaded Succesfully")
    
// }).catch((err) => {
//     console.log(err);
//     alert("Error loadiing script")
    
// });


// q2

console.log("Loading Script...");

function loadScript(src) {
    return new Promise((resolve, reject) => {

        let script = document.createElement("script");
        script.src = src;

        script.onload = function () {
            resolve("Script Loaded Successfully");
        };

        script.onerror = function () {
            reject("Failed to load script");
        };

        document.body.appendChild(script);
    });
}

async function main() {
    try {
        let result = await loadScript("script2.js");
        console.log(result);
        alert(result);
    }
    catch (err) {
        console.log(err);
        alert(err);
    }
}

main();