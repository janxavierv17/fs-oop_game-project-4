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
}