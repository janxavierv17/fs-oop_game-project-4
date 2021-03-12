class Phrase {
    constructor(phrase) {
        // The actual phrase the Phrase object is representing.
        this.phrase = phrase.toLowerCase()
    }
    /**
    * Display phrase on game board
    */
    addPhraseToDisplay() {
        let phraseUl = document.querySelector("#phrase").firstElementChild;
        let phraseToArray = this.phrase.split("")
        console.log(phraseToArray)
        let liContent = ""
        for (let i = 0; i < phraseToArray.length; i++) {
            if (phraseToArray[i] === " ") {
                liContent += `<li class="space"> </li>`
            } else {
                liContent += `<li class="hide letter ${phraseToArray[i]}">${phraseToArray[i]}</li>`
            }
        }
        phraseUl.innerHTML = liContent;
    }
    /**
    * Checks if passed letter is in phrase
    * @param (string) letter - Letter to check
    */
    checkLetter(letter) {
        return this.phrase.includes(letter.textContent) ? true : false;
    };
    /**
    * Displays passed letter on screen after a match is found
    * @param (string) letter - Letter to display
    */
    showMatchedLetter(letter) {
        let phraseUl = document.querySelector("#phrase").firstElementChild
        let hiddenLetters = phraseUl.querySelectorAll(".hide")
        hiddenLetters.forEach(hiddenLetter => {
            if (hiddenLetter.textContent === letter) {
                hiddenLetter.classList.replace("hide", "show");
                hiddenLetter.classList.add("magnify")
            }
        })
    };
}