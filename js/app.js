let i = 0;
let Caroussel = function ([...image]) {
    this.arrayImage = [...image];
    this.createDiv= function () {
        const div = document.createElement("div");
        div.id = "containerSecond";
        div.style.width = "50vw";
        div.style.height = "100vh";

        document.body.appendChild(div);

    }
    this.image = function () {
        const image = document.createElement("img");
        image.src = "/img/img1.jpg";
        image.id = "noelDisney";
        image.style.width = "70vw";
        image.style.height = "60vh";
        document.getElementById("containerSecond").appendChild(image);
    }
    let buttonD = document.getElementById("arrowD");
    buttonD.addEventListener("click", ()=> {
        let noelDisney = document.getElementById("noelDisney");
        if (i < this.arrayImage.length-1) {
            noelDisney.src = this.arrayImage[i++];
            console.log(i)
        }
        else {
            i = 0;
            noelDisney.src = this.arrayImage[i];

        }
    })
    let buttonG = document.getElementById("arrowG");
    buttonG.addEventListener("click", ()=> {
        let noelDisney = document.getElementById("noelDisney");
        if (i === 0) {
            noelDisney.src = this.arrayImage[i--];
        }
        else if (i < this.arrayImage.length-1) {
            i = this.arrayImage.length-1;
            noelDisney.src = this.arrayImage[i];
            console.log(i)
        }
    })
}

let CarousselImage = new Caroussel(["/img/img1.jpg", "/img/img2.jpg", "/img/img3.jpg", "/img/img4.jpg", "/img/img5.jpg",
    "/img/img6.jpg", "/img/img7.jpg", "/img/img8.jpg", "/img/img9.jpg", "/img/img10.jpg"])
CarousselImage.createDiv();
CarousselImage.image();