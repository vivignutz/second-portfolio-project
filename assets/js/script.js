//** array to storage objects with src and id 1 to 6 */
let images = [];

//** array to storage clicked cards +/
let flippedCards = [];

//** assigning the images to the cards  */
for (let i = 0; i < 12; i++) {
    let img = {
        src: "images/" + i + ".png",
        id: i % 6
    };

    //** push the images to array */
    images.push(img);
}

//** here starts the game */
startGame()

function startGame() {
    //** reseting the card */
    flippedCards = [];

    //** sorting cards */
    images = randomSort(images);

    //** cards div w/classes front */
    let frontFaces = document.getElementsByClassName("front");

    for (let i = 0; i < 12; i++) {
        let card = document.querySelector("#card" + i);
        //card.style.left = i % 6 === 0 ? 5 + "px" : i % 6 * 165 + 5 + "px";
        //card.style.top = i < 6 ? 5 + "px" : 250 + "px";

        card.addEventListener("click", flipCard, false);

        //** aditioning images ids to the cards */
        frontFaces[i].style.background = "url('" + images[i].src + "')";
        frontFaces[i].setAttribute("id", images[i].id);
    }
}

//** creating alleatory numbers for cards distribution */
function randomSort(oldArray) {
    //** empty newArray is created */
    let newArray = [];

    while (newArray.length !== oldArray.length) {
        //** creates a variable i which gets a alleatory number */
        let i = Math.floor(Math.random() * oldArray.length); //* alleatory value which gets a random value X elemtn numbers of oldArray
        if (newArray.indexOf(oldArray[i]) < 0) {
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

        //** to avoid to take card with same number */
        if (faces[0].classList.length > 2) {
            return;
        }

        faces[0].classList.toggle("flipped");
        faces[1].classList.toggle("flipped");

        //** How to flip only 2 cards and unflip both in the 3rd click */
        //** in case of no match */
        flippedCards.push(this);
    } else {
        flippedCards[0].childNodes[1].classList.toggle("flipped"); // childNodes to return newArray
        flippedCards[0].childNodes[3].classList.toggle("flipped");
        flippedCards[1].childNodes[1].classList.toggle("flipped");
        flippedCards[1].childNodes[3].classList.toggle("flipped");

        flippedCards = [];
    }
}