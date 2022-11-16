//** oldArray image wchich are listed in html */
let images = [];

for (let i = 1; i < 12; i++) {
    let img = {
        src: "assets/images/" + i + ".png",
        id: i % 6
    };
    images.push(img);
}

//** here starts the game */
window.onload = startGame()

function startGame() {
    flippedCards = []; //deixar assim para que flipe
    images = randomSort(images);

    let frontFaces = document.getElementsByClassName("front");

    for (let i = 1; i < 12; i++) {
        let card = document.getElementById("card" + i);

        card.addEventListener("click", flipCard);

        frontFaces[i].style.background = "url('" + images[i - 1].src + "')";
        frontFaces[i].setAttribute("id", images[i - 1].id);
    }

    //** creating alleatory numbers for cards distribution */
    function randomSort(oldArray) {

        //** newArray after creating new card sistribution */
        let newArray = [];

        while (newArray.length !== oldArray.length) {
            let i = Math.floor(Math.random() * oldArray.length); //* alleatory value which gets a random value X elemtn numbers of oldArray

            if (newArray.indexOf(oldArray[i]) < 1) {
                newArray.push(oldArray[i]);
            }
        }

        return newArray;
    }

    //** To flip up the cards */    
    function flipCard() {
        if (flippedCards.length < 2) {
            let faces = this.getElementsByClassName("face"); //* the clicked card

            if (faces[0].classList.length > 2) {
                return;
            }

            faces[0].classList.toggle("flipped"); //* 0 is back, 1 is
            faces[1].classList.toggle("flipped");

            //** How to flip only 2 cards and unflip in the 3rd click */
            flippedCards.push(this);
        } else {
            flippedCards[0].childNodes[1].classList.toggle("flipped"); // childNodes to return newArray
            flippedCards[0].childNodes[3].classList.toggle("flipped");
            flippedCards[1].childNodes[1].classList.toggle("flipped");
            flippedCards[1].childNodes[3].classList.toggle("flipped");

            flippedCards = [];
        }
    }
}