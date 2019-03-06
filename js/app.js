// HTTP (Hypertext Transfer Protocol)
// A request - what do we want to do
// response protocol - what was actually done

const gameEl = document.querySelector("#puzzle");
const guessesEl = document.querySelector("#guesses");
let game1;
// To initially display on the web page
// gameEl.textContent = game1.puzzle;
// guessesEl.textContent = game1.statusMessage;

// // console.log(game1);
window.addEventListener("keypress", (e) => {
  const guess = String.fromCharCode(e.charCode);
  game1.makeAGuess(guess);
  // To run again every time a guess is made and display changes to the screen
  render();
});

const render = () => {
  gameEl.innerHTML = "";
  guessesEl.textContent = game1.statusMessage;

  game1.puzzle.split("").forEach((letter) => {
    const puzzleLetter = document.createElement("span");
    puzzleLetter.textContent = letter;
    gameEl.appendChild(puzzleLetter);
  });
};

const startGame = async () => {
  const puzzle = await getPuzzle("2");
  game1 = new Hangman(puzzle, 5);
  render();
};

document.querySelector("#reset").addEventListener("click", startGame);

startGame();
