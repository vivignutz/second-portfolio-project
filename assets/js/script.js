//** anonymous function for an immediately start */
(function () {
        let images = []; //** array for all images and respective texts. Or use >> images = []; 

        for (let i = 1; i < 18; i++) {
            let img = {
                src: "assets/images/" + i + ".png",
                id: i % 9
            };
            images.push(img);
        }

        //** here starts the game */
        startGame();

        function startGame() {
            images = randomSort(images);

            let frontFaces = document.getElementsByClassName("front");

            for (let i = 1; i < 18; i++) { //* while i < 18, the i will be increased 1 by 1 
                let card = document.getElementById("card" + i); //*or  let card = document.querySelector("#card" + i);
                card.style.left = (i === 1 || i === 10) ? 5 + "px" : i % 10 * 165 + 5 + "px";
                card.style.top = i < 9 ? 5 + "px" : 250 + "px"; //* the symbol : means "else"

                card.addEventListener("click", flipCard); //** event click to flip theds funcao disparada: flipcard, false (to be sure that it wont happen by mistake) */

                frontFaces[i].style.background = "url('" + images[i].src + "')";
                frontFaces[i].setAttribute("id", images[i].id);
            }

            //** creating alleatory numbers for card distribution
            function randomSort(oldArray) {

                let newArray = []; //* new empty array 

                while (newArray.length !== oldArray.length) { //*while newarray doesnt has same element numbers of the old one, new numbers are being created
                    let i = Math.floor(Math.random() * oldArray.length); //* alleatory value which gets a random value X elemtn numbers of oldArray
                    if newArray.indexOf(oldArray[i]) < 1) {
                    newArray.push(oldArray[i]);
                }
            }

            return newArray;

        }

        //** function to flip cards */    
        function flipCard() {
            let faces = this.getElementsByClassName("face"); //* the clicked card
            faces[0].classList.toggle("flipped"); //* 0 is back, 1 is
            faces[1].classList.toggle("flipped");
        }

    }
}());