(function () {
    startGame();

    function startGame() {
        for (var i = 0; i < 16; i++) {
            var card = document.querySelector("#card" + i);
            card.style.left = (i === 0 || i === 8) ? 5 + "px" : i % 8 * 165 + 5 + 5 + "px";
            card.style.top = i < 8 ? 5 + "px" : 250 + "px";
        }
    }
}());