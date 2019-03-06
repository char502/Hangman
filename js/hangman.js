class Hangman {
  constructor(word, remainingGuesses) {
    this.word = word.toLowerCase().split("");
    this.guessedLetters = [];
    this.remainingGuesses = remainingGuesses;
    this.status = "playing";
  }
  playerStatus() {
    const finished = this.word.every(
      (letter) => this.guessedLetters.includes(letter) || letter === " "
    );

    if (this.remainingGuesses === 0) {
      this.status = "failed";
    } else if (finished) {
      this.status = "finished";
    } else {
      this.status = "playing";
    }

    console.log(this.status);
  }
  get statusMessage() {
    const wordInPlay = this.word.join("");

    if (this.status === "playing") {
      return `Guesses left: ${this.remainingGuesses}`;
    } else if (this.status === "failed") {
      return `Nice try! The word was: "${wordInPlay}"`;
    } else if (this.status === "finished") {
      return "Great! You guessed the word";
    }
  }
  get puzzle() {
    let puzzle = "";
    // let newArr = [];

    this.word.forEach((letter) => {
      if (this.guessedLetters.includes(letter) || letter === " ") {
        puzzle += letter;
      } else {
        puzzle += "*";
      }
    });
    // console.log(puzzle);
    return puzzle;
  }
  makeAGuess(guess) {
    guess = guess.toLowerCase();
    const isUnique = !this.guessedLetters.includes(guess);
    const isBadGuess = !this.word.includes(guess);

    // return nothing if status is not playing (prevent the rest of the program from running)
    if (this.status !== "playing") {
      return;
    }

    if (isUnique) {
      this.guessedLetters.push(guess);
    }

    if (isUnique && isBadGuess) {
      this.remainingGuesses--;
    }

    this.playerStatus();
    // this.statusMessage();
  }
}
