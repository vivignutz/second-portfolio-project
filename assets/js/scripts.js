//** array for all images and respective texts */
let array = [];

for (let i = 0; i < 16; i++) {
    let img = {
        src: "img/" + i + ".png",
        id: i % 8
    };
    images.push(img);
}
console.log(images);

//** anonymous function for an immediately start  */
(function () {
    startGame();

    function startGame() {
        for (let i = 0; i < 16; i++) {
            let card = document.querySelector("#card" + i);
            card.style.left = (i === 0 || i === 8) ? 5 + "px" : i % 8 * 165 + 5 + 5 + "px";
            card.style.top = i < 8 ? 5 + "px" : 250 + "px";

            card.addEventListener("click", flipCard, false); //** evento: click, funcao disparada: flipcard, false (to be sure that it wont happen by mistake) */
        }

        //** function to toggle cards */
        function flipCard() {
            let faces = this.getElementsByClassName("face");
            faces[0].classList.toggle("flipped");
            faces[1].classList.toggle("flipped");
        }
    }
}());