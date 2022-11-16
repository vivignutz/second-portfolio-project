//** Array image wchich are listed in html */
let images = [];

for (let i = 1; i < 12; i++) {
    let img = {
        src: "assets/images/" + i + ".png",
        id: i % 6
    };
    images.push(img);
}

function startGame() {
    flippedCards = [];
    images = randomSort(images);

    let frontFaces = document.getElementsByClassName("front");

    for (let i = 1; i < 12; i++) { //* while i < 12, the i will be increased 1 by 1 
        let card = document.getElementById("card" + i); //*or  let card = document.querySelector("#card" + i);

        card.addEventListener("click", flipCard); //** event click to flip theds funcao disparada: flipcard, false (to be sure that it wont happen by mistake) */

        frontFaces[i].style.background = "url('" + images[i - 1].src + "')";
        frontFaces[i].setAttribute("id", images[i - 1].id);
    }

    //** creating alleatory numbers for card distribution */
    function randomSort(oldArray) {

        let newArray = []; //* new empty array 

        while (newArray.length !== oldArray.length) { //*while newarray doesnt has same element numbers of the old one, new numbers are being created
            let i = Math.floor(Math.random() * oldArray.length); //* alleatory value which gets a random value X elemtn numbers of oldArray

            if (newArray.indexOf(oldArray[i]) < 1) {
                newArray.push(oldArray[i]);
            }
        }

        return newArray;
    }

    //** function to flip the cards */    
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

//** here starts the game */
window.onload = startGame()