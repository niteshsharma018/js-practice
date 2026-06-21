function randomDelay(){
    let delay = (Math.floor(Math.random() * 7) + 1) * 1000;

    return new Promise((resolve) => {
       setTimeout(() => {
        resolve();
       }, delay);
    });
}


async function showMessage(message) {
    await randomDelay();

    let div = document.createElement("div");
    div.innerText = message;

    terminal.appendChild(div);

     for(let i=0;i<6;i++){

        div.innerText = message + ".".repeat(i % 4);

        await new Promise(resolve =>
            setTimeout(resolve,300)
        );
    }

    div.innerText = message + "...";

    
}


async function startHack() {

    await showMessage('Initializing Hacking');

    await showMessage('Reading your files');

    await showMessage('Password files dectected');

    await showMessage('Sending all password and presonal file to the server');

    await showMessage('Cleaning up');  
    
}

startHack();