console.log("This is a tutorial on loops")

let a = 1;

for (let i = 0; i < 103; i++) {
    console.log(a + i);
}

let obj = {
    name: "Nitesh",
    Role: "programer",
    company: "nws"

}

// for in loop
for (const key in obj) {
    
    const element = obj[key];
    console.log(key, element) 
}

for (const c of "Nitesh") {
    console.log(c)
    
}

// while loop

let i = 0;
while(i<6){
    console.log(i)
    i++;
}


let i = 10;
do {
    console.log(i);
    i++
} while (i<8);
