  // document.containor.el
        // let containor = document.getElementsByTagName("div");

        // containor.firstElementChild.style.color = "green"

  
  function getRandomColor(){
            let r = Math.floor(Math.random()*256);
            let g  = Math.floor(Math.random()*256);
            // let b = Math.floor(Math.random()*256);
            let b = Math.ceil(Math.random()*256);

            return `rgb(${r}, ${g}, ${b})`;
        }

        let boxes = document.querySelectorAll(".box");

        boxes.forEach(box => {
            box.style.backgroundColor = getRandomColor();
            box.style.color = getRandomColor();
            
        });
