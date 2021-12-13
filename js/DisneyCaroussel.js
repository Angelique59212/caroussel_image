let Caroussel = function ([...image]) {
    let i = 0;
    this.arrayImage = [...image];

    this.title = function (title) {
        const h1 = document.createElement("h1");
        h1.innerHTML = title;
        h1.style.textAlign = "center";
        h1.style.padding = "2rem";
        h1.style.fontSize = "3rem";
        h1.style.color = "#FFFFFF";
        h1.style.background = "#912C22";
        h1.style.textShadow =  "0 0 10px #FFFFFF";
        document.body.appendChild(h1);

    }

    this.draw = function () {

        const div = document.createElement("div");
        div.id = "containerSecond";
        div.style.position = "relative";
        div.style.width = "70vw";
        div.style.height = "60vh";
        div.style.margin = "0 auto";
        div.style.display = "flex";
        div.style.marginTop = "10rem";
        document.body.appendChild(div);

        const divButton = document.createElement("div");
        divButton.style.width = "70vw";
        divButton.style.height = "60vh";
        divButton.style.position = "absolute";
        divButton.style.display = "flex";
        divButton.style.justifyContent = "space-between";
        divButton.style.alignItems = "center";
        div.appendChild(divButton);

        const buttonLeft = document.createElement("button");
        buttonLeft.id = "arrowG";
        buttonLeft.innerHTML = "<";
        divButton.appendChild(buttonLeft);

        const buttonRight = document.createElement("button");
        buttonRight.id = "arrowD";
        buttonRight.innerHTML = ">";
        divButton.appendChild(buttonRight);

        const image = document.createElement("img");
        image.src = "/img/img1.jpg";
        image.id = "noelDisney";
        image.style.width = "70vw";
        image.style.height = "60vh";
        document.getElementById("containerSecond").appendChild(image);
    }

   this.nav = function () {
       let buttonD = document.getElementById("arrowD");
       console.log(buttonD)
       buttonD.addEventListener("click", ()=> {
           let noelDisney = document.getElementById("noelDisney");
           if (i < this.arrayImage.length-1) {
               i++;
               noelDisney.src = this.arrayImage[i];
           }
           else {
               i = 0;
               noelDisney.src = this.arrayImage[i];
           }
       })
       let buttonG = document.getElementById("arrowG");
       buttonG.addEventListener("click", ()=> {
           let noelDisney = document.getElementById("noelDisney");
           i--;
           noelDisney.src = this.arrayImage[i];
           if (i < 0) {
               i = this.arrayImage.length - 1;
               noelDisney.src = this.arrayImage[i];
           }
       })
   }
}