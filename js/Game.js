class Game {
    /**
     * missed tracks the number of misssed guesses by the player.
     * phrases holds an array of Phrase objects to use with the game.
     * activePhrase is the Phrase object that's currently in play.
     */
    constructor() {
        this.missed = 0;
        this.phrases = this.createPhrases()
        this.activePhrase = null;
    }


    /**
    * Creates phrases for use in game
    * @return {array} An array of phrases that could be used in the game
    */
    createPhrases() {
        let phrases = [
            new Phrase("I Like Ramen"),
            new Phrase("Golden State Warriors"),
            new Phrase("Shingeki no kyojin"),
            new Phrase("Fire Damper"),
            new Phrase("Object Oriented Programming"),
        ]
        return phrases;
    };

    /**
    * Selects random phrase from phrases property
    * @return {Object} Phrase object chosen to be used
    */
    getRandomPhrase() {
        let randomNumber = Math.floor(Math.random() * 5)
        return this.phrases[randomNumber];
    };

    /**
    * Begins game by selecting a random phrase and displaying it to user
    */
    startGame() {
        let overlayDiv = document.querySelector("#overlay")
        overlayDiv.style.display = "none"

        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay()
    };

    /**
    * Checks for winning move
    * @return {boolean} True if game has been won, false if game wasn't
    won
    */
    checkForWin() {
        let phraseUl = document.querySelector("#phrase").firstElementChild
        let letters = phraseUl.querySelectorAll(".hide")
        return letters.length === 0 ? true : false;
    };

    /**
    * Increases the value of the missed property
    * Removes a life from the scoreboard
    * Checks if player has remaining lives and ends game if player is out
    */
    removeLife() {
        this.missed++;
        if (this.missed < 5) {
            const hearts = document.querySelector('img[src="images/liveHeart.png"]');
            hearts.setAttribute("src", "images/lostHeart.png");
        } else {
            this.gameOver("Sorry, you just lost all your tries!", "lose")
        }
    };



    /**
    * Displays game over message
    * @param {boolean} gameWon - Whether or not the user won the game
    */
    gameOver(gameWon, status) {
        let overlayDiv = document.querySelector("#overlay")
        overlayDiv.style.display = "flex";
        overlayDiv.className = status

        overlayDiv.querySelector("#game-over-message").textContent = gameWon;
        overlayDiv.querySelector("#btn__reset").textContent = "Play Again ?"
        let phraseUl = document.querySelector("#phrase").firstElementChild
        phraseUl.innerHTML = "";

        const onscreenKeyboard = document.querySelectorAll('#qwerty button');
        onscreenKeyboard.forEach(button => {
            button.disabled = false;
            button.className = "key"
        })

        const hearts = document.querySelectorAll('#scoreboard img');
        for (let i = 0; i < hearts.length; i++) {
            hearts[i].setAttribute("src", "images/liveHeart.png")
        }
    };
}