//** The game shoud start with a simple click on a choosen card */
//* The cards has to flips and match with the corresponding text one */
//* When 2 cards match the matched cards becomes a green border and a
// "match" sign should appears, going from down to top */
//* when all cards are matched, the modal container should appear
// and the "game over" img appears to the player, reseting the game *//

//** array to storage objects with src */
let images = [];

//** array to storage clicked cards */
let flippedCards = [];

//** img that shows when cards match */
let matchSign = document.querySelector("#match");

//** variable to count the matches */
let matches = 0;

//** img that shows when the game is over */
let modal = document.querySelector("#gameOver");

//** game over */
let modalGameOver = document.querySelector("#modalGameOver");

//** sign when match happens */
let imgMatchSign = document.querySelector("#imgMatchSign");


//** assigning the images (12) to the cards  */
for (let i = 1; i < 13; i++) {
    let img = {
        src: `assets/images/${i}.jpg`,
        id: i % 6
    };

    //** pushing the images to array */
    images.push(img);
}

//** here starts the game */
window.onload = startGame();

//* function startGame is called */
function startGame() {
    matches = 0;
    flippedCards = [];

    //** shuffle the cards */
    images = fyShuffle(images);

    //** cards with class front and back are called */
    let frontFaces = document.getElementsByClassName("front");
    let backFaces = document.getElementsByClassName("back");

    //* if the variable i = 0, so i is minor of 12 (cards), than i becomes a face front card */
    for (let i = 0; i < 12; i++) {

        //** and removing the ones with classes flipped and match */
        frontFaces[i].classList.remove("flipped", "match");
        backFaces[i].classList.remove("flipped", "match");

        let card = document.querySelector("#card" + (i + 1));

        card.addEventListener("click", flipCard, false);

        //** aditioning images ids to the cards */
        frontFaces[i].style.background = "url('" + images[i].src + "')";
        frontFaces[i].setAttribute("id", images[i].id);
    }

    //** after reorganizing the game to play again,
    // inserted value zIndex -2 to come to back of page again */
    modalGameOver.style.zIndex = -2;
    modalGameOver.removeEventListener("click", startGame, false);
}

//** shiffling numbers for cards distribution again */
function randomSort(oldArray) {

    //** an empty newArray is created */
    let newArray = [];

    //** creates a variable i which gets a alleatory number */
    while (newArray.length !== oldArray.length) {

        //* alleatory value which gets a random value X element numbers of oldArray
        let i = Math.floor(Math.random() * oldArray.length);

        if (newArray.indexOf(oldArray[i]) < 1) {
            newArray.push(oldArray[i]);
        }
    }

    //** returning to the nweArray */
    return newArray;
}

// https://sebhastian.com/fisher-yates-shuffle-javascript/
function fyShuffle(arr) {
    let i = arr.length;
    while (--i > 0) {
        let randIndex = Math.floor(Math.random() * (i + 1));
        [arr[randIndex], arr[i]] = [arr[i], arr[randIndex]];
    }
    return arr;
}

//** this flips up up the cards */
function flipCard() {
    if (flippedCards.length < 2) {
        let faces = this.getElementsByClassName("face");

        //** to avoid to take card with same number */
        if (faces[1].classList.length > 2) {
            return;
        }

        faces[0].classList.toggle("flipped");
        faces[1].classList.toggle("flipped");

        //** How to flip only 2 cards and unflip both in the 3rd click
        // in case of no match */
        flippedCards.push(this);

        //** if array flippedcatds.lenght has achieve 2 elements,
        // it compares these 2 cards. Fot that I used the childNodes.
        // If the fliped card matches with the second one, the alert comes */
        if (flippedCards.length === 2) {
            if (flippedCards[0].childNodes[3].id === flippedCards[1].childNodes[3].id) {
                flippedCards[0].childNodes[1].classList.toggle("match");
                flippedCards[0].childNodes[3].classList.toggle("match");
                flippedCards[1].childNodes[1].classList.toggle("match");
                flippedCards[1].childNodes[3].classList.toggle("match");

                //** inserting the match img to shows when cards match */
                matchCardSign();

                matches++;

                flippedCards = [];

                //if matches is equal 6, the modal is generated and the game restarts
                if (matches === 6) {
                    gameOver();
                }
            }
        }
    } else {
        flippedCards[0].childNodes[1].classList.toggle("flipped");
        flippedCards[0].childNodes[3].classList.toggle("flipped");
        flippedCards[1].childNodes[1].classList.toggle("flipped");
        flippedCards[1].childNodes[3].classList.toggle("flipped");

        flippedCards = [];
    }
}

function gameRestart() {
    startGame();
    flipCard();
}

//** to bring th match img to the front when cards matches */
function matchCardSign() {
    imgMatchSign.classList.add("matched")

    /* to reset the configuration when match img does not show */
    setTimeout(function () {
        imgMatchSign.classList.remove("matched")
    }, 2500);
}

//window.setTimeout(function () { gameOver(); }, 2000)
//** to bring the modal to the front */
function gameOver() {
    modalGameOver.style.zIndex = 10;
    modalGameOver.addEventListener("click", startGame, false);
}

//** Restart Game */

let restartButton = document.getElementById("restartButton");
// Add event listener to restart button
restartButton.addEventListener("click", gameRestart);