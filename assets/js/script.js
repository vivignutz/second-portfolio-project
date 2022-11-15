//** array for all images and respective texts */
images = [];

for (let i = 1; i < 19; i++) {
    let img = {
        src: "assets/images/" + i + ".png",
        id: i % 9
    };
    images.push(img);
}
console.log(images);


//** anonymous function for an immediately start */
(function () {
    startGame();

    //** here starts the game */
    function startGame() {
        randomSort();

        let frontFaces = document.getElementsByClassName("front");

        for (let i = 1; i < 18; i++) {
            let card = document.querySelector("#card" + i);
            card.style.left = (i === 1 || i === 9) ? 5 + "px" : i % 9 * 5 + 5 + 5 + "px";
            card.style.top = i < 9 ? 5 + "px" : 250 + "px";

            card.addEventListener("click", flipCard, false); //** evento: click, funcao disparada: flipcard, false (to be sure that it wont happen by mistake) */
            frontFaces[i].style.background = "url('" + images[i - 1]['src'] + "')";
            frontFaces[i].setAttribute("id", images[i].de);
        }

        //** generation alleatory "numbers" + math.floor for absolute numbers */
        function randomSort() {}

        //** function to flip cards */    
        function flipCard() {
            let faces = this.getElementsByClassName("face");

            faces[0].classList.toggle("flipped");
            faces[1].classList.toggle("flipped");
        }

    }
}());