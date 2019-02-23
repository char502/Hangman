// prototypal ingeritance
// Not arrow function for constructor - arrow functions do not bind 'this'
const Hangman = function(word, remainingGuesses) {
  this.word = word.toLowerCase().split("");
  this.guessedLetters = [];
  this.remainingGuesses = remainingGuesses;
  this.status = "playing";
};

Hangman.prototype.playerStatus = function() {
  const finished = this.word.every((letter) =>
    this.guessedLetters.includes(letter)
  );
  if (this.remainingGuesses === 0) {
    this.status = "failed";
  } else if (finished) {
    this.status = "finished";
  } else {
    this.status = "playing";
  }

  console.log(this.status);
};

Hangman.prototype.statusMessage = function() {
  const wordInPlay = this.word.join("");

  if (this.status === "playing") {
    return `Guesses left: ${this.remainingGuesses}`;
  } else if (this.status === "failed") {
    return `Nice try! The word was: "${wordInPlay}"`;
  } else if (this.status === "finished") {
    return "Great! You guessed the word";
  }
};

Hangman.prototype.getPuzzle = function() {
  let puzzle = "";
  // let newArr = [];

  this.word.forEach((letter) => {
    if (this.guessedLetters.includes(letter) || letter === " ") {
      puzzle += letter;
    } else {
      puzzle += "*";
    }
  });

  return puzzle;
};

Hangman.prototype.makeAGuess = function(guess) {
  guess = guess.toLowerCase();
  const isUnique = !this.guessedLetters.includes(guess);
  const isBadGuess = !this.word.includes(guess);

  // return nothing if status is not playing (prevent the rest of the program from running)
  if (this.status !== "playing") {
    return;
  }

  if (isUnique) {
    this.guessedLetters.push(guess);
    // console.log(`You have ${this.remainingGuesses} guesses Remaining!`);
  }

  if (isUnique && isBadGuess) {
    this.remainingGuesses--;
    // console.log(`You have ${this.remainingGuesses} guess(es) Remaining!`);
  }

  this.playerStatus();
  // this.statusMessage();
};
