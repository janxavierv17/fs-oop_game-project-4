const game = new Game();
// const logPhrase = (phrase) => {
//     console.log(`Phrase - phrase: `, phrase.phrase, "length", phrase.phrase.length);
// };
// logPhrase(game.getRandomPhrase());
// game.getRandomPhrase().addPhraseToDisplay();

game.startGame();
console.log(`Active Phrase - phrase: ${game.activePhrase.phrase}`);