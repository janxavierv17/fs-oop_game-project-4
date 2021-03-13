
// const logPhrase = (phrase) => {
//     console.log(`Phrase - phrase: `, phrase.phrase, "length", phrase.phrase.length);
// };
// logPhrase(game.getRandomPhrase());
// game.getRandomPhrase().addPhraseToDisplay();

// game.startGame();
// console.log(`Active Phrase - phrase: ${game.activePhrase.phrase}`);

let game
let startButton = document.querySelector("#btn__reset")
startButton.addEventListener("click", () => {
    game = new Game();
    game.startGame();
})

let onScreenKeyboard = document.querySelectorAll('#qwerty button');
onScreenKeyboard.forEach(keyChar => {
    keyChar.addEventListener("click", e => {
        const chosenLetter = e.target
        game.handleInteraction(chosenLetter)
    })
})