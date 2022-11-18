//** array to storage objects with src and id 1 to 6 */
let images = [];

//** img when cards match */
var matchSign = document.querySelector("#match");

//** img when the game is over */
let modal = document.querySelector("#gameOver");

//** array to storage clicked cards +/
let flippedCards = [];

//** game over */
let modalGameOver = document.querySelector("#modalGameOver");

let imgMatchSign = document.querySelector("#imgMatchSign");

//** variabel to count cards untill 6 */
let matches = 0;

//** assigning the images to the cards  */

for (let i = 1; i < 13; i++) {
    let img = {
        src: `assets/images/${i}.png`,
        id: i % 6
    };

    //** push the images to array */
    images.push(img);
}

//** here starts the game */
window.onload = startGame()

function startGame() {
    //** reseting the matches */
    matches = 0;

    //** reseting the flipped cards */
    flippedCards = [];

    //** sorting cards */
    images = randomSort(images);
    console.log(images);

    //** cards with class front and back */
    let frontFaces = document.getElementsByClassName("front");
    let backFaces = document.getElementsByClassName("back");

    for (let i = 1; i < 13; i++) {
        //** accessing cards with class front */
        //** and removing the ones with classes flipped and match */
        frontFaces[i].classList.remove("flipped", "match");
        backFaces[i].classList.remove("flipped", "match");

        let card = document.querySelector("#card" + (i + 1));

        card.addEventListener("click", flipCard, false);

        //** aditioning images ids to the cards */
        frontFaces[i].style.background = "url('" + images[i - 1].src + "')";
        frontFaces[i].setAttribute("id", images[i - 1].id);
        console.log(images[i - 1].id);
    }

    //** to remove the modal from the front */
    modalGameOver.style.zIndex = -2;
    //modalGameOver.removeEventListener("click, startGame, false")
}

//** creating alleatory numbers for cards distribution */
function randomSort(oldArray) {
    //** empty newArray is created */
    let newArray = [];

    while (newArray.length !== oldArray.length) {
        //** creates a variable i which gets a alleatory number */
        let i = Math.floor(Math.random() * oldArray.length); //* alleatory value which gets a random value X elemtn numbers of oldArray
        if (newArray.indexOf(oldArray[i]) < 1) {
            newArray.push(oldArray[i]);
        }
    }

    //** retorning to the nweArray */
    return newArray;
}

//** To flip up the cards */    
function flipCard() {
    if (flippedCards.length < 2) {
        let faces = this.getElementsByClassName("face");
        console.log(faces)
        //** to avoid to take card with same number */
        if (faces[0].classList.length > 2) {
            return;
        }

        faces[0].classList.toggle("flipped");
        faces[1].classList.toggle("flipped");

        //** How to flip only 2 cards and unflip both in the 3rd click */
        //** in case of no match */
        flippedCards.push(this);

        //** to check if ther are 2 flipped cards and if they match */
        if (flippedCards.length === 2) {
            if (flippedCards[0].childNodes[3].id === flippedCards[1].childNodes[3].id) {
                flippedCards[0].childNodes[1].classList.toggle("match");
                flippedCards[0].childNodes[3].classList.toggle("match");
                flippedCards[1].childNodes[1].classList.toggle("match");
                flippedCards[1].childNodes[3].classList.toggle("match");

                //** inserting the match img when cards match */
                matchCardSign();

                matches++;

                flippedCards = [];

                if (matches === 6) {
                    gameOver();
                }
            }
        }
    } else {
        flippedCards[0].childNodes[1].classList.toggle("flipped"); // childNodes to return newArray
        flippedCards[0].childNodes[3].classList.toggle("flipped");
        flippedCards[1].childNodes[1].classList.toggle("flipped");
        flippedCards[1].childNodes[3].classList.toggle("flipped");

        flippedCards = [];
    }
}

//** to generate match img */
function matchCardSign() {
    imgMatchSign.style.zIndex = 1;
    imgMatchSign.style.top = 150 + "px";
    imgMatchSign.style.opacity = 0;

    //** to set the old configuration when match img is gone */
    setTimeout(function () {
        imgMatchSign.style.zIndex = -1;
        imgMatchSign.style.top = 150 + "px";
        imgMatchSign.style.opacity = 1;

    }, 1500);
}

//** to bring the modal to the front */
function gameOver() {
    modalGameOver.style.zIndex = 10;
    modalGameOver.addEventListener("click", startGame, false)
}