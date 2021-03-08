class Phrase {
    constructor(phrase) {
        // The actual phrase representing the Phrase Object
        this.phrase = phrase;
    }
    /**
     * Display phrase on game board
     */
    addPhraseToDisplay() {
        let phraseUl = document.querySelector("#phrase")
        let phraseChild = phraseUl.children[0];
        for (let i = 0; i < this.phrase.length; i++) {
            let li = document.createElement("li")
            li.textContent = this.phrase[i];
            if (li.textContent === " ") {
                li.classList.add("hide", "space")
            } else {
                li.classList.add("hide", "letter")
            }
            phraseChild.appendChild(li)
        }
    }
}