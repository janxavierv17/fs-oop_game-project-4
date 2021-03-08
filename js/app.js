const logPhrase = (phrase) => {
    console.log(`Phrase - phrase:`, phrase.phrase)
}

const game = new Game();
game.startGame();
console.log(`Active Phrase - phrase: ${game.activePhrase.phrase} `)