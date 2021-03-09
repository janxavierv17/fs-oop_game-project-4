const startButton = document.querySelector("#btn__reset")
const logPhrase = (phrase) => {
    console.log(`Phrase - phrase:`, phrase.phrase)
}

let game
startButton.addEventListener("click", () => {
    game = new Game();
    game.startGame();
})