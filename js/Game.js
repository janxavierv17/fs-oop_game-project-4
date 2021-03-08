class Game {
    constructor() {
        this.missed = 0;
        this.phrases = [
            { phrase: "I Like Ramen" },
            { phrase: "Lyka Carillo Barnum" },
            { phrase: "River Where the Moon Rises" },
            { phrase: "Los Angeles Lakers" },
            { phrase: "Golden State Warriors" },
        ]
        this.activePhrase = null;
    }

    /**
     * Selects random phrase from phrases property
     * @return {Ojbect} Phrase object chosen to be used
     */

    getRandomPhrase() {
        let randomNumber = Math.floor(Math.random() * 5)
        let randomPhrase = this.phrases[randomNumber]
        return randomPhrase;
    }

    /**
     * Begins game by selecting a random phrase and displaying it to the user
     */
    startGame() {
        this.activePhrase = new Phrase(this.getRandomPhrase().phrase)
        this.activePhrase.addPhraseToDisplay()
        let screenOverlay = document.querySelector("#overlay")
        screenOverlay.style.display = "none"
    }
}