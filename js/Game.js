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
}