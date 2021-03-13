/**
 * An event handler for button was assign with a click event.
 * This event handler will create new object of game and phrase.
 */
let game
let startButton = document.querySelector("#btn__reset")
startButton.addEventListener("click", () => {
    game = new Game();
    game.startGame();
})

/**
 * I assigned a event listener for a collection of buttons.
 * It will handle user interaction where their chosen letter the onscreen keyboard,
 * will get matched with the phrase on the board.
 */
let onScreenKeyboard = document.querySelectorAll('#qwerty button');
onScreenKeyboard.forEach(keyChar => {
    keyChar.addEventListener("click", e => {
        const chosenLetter = e.target
        game.handleInteraction(chosenLetter)
    })
})