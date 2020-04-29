export default {
  gameControlVisible: false,
  wordsList: ["epicodus", "programming", "react", "coding", "redux", "javascript"],
  imagePaths: ["https://upload.wikimedia.org/wikipedia/commons/8/8b/Hangman-0.png", "https://upload.wikimedia.org/wikipedia/commons/3/30/Hangman-1.png", "https://upload.wikimedia.org/wikipedia/commons/7/70/Hangman-2.png", "https://upload.wikimedia.org/wikipedia/commons/9/97/Hangman-3.png", "https://upload.wikimedia.org/wikipedia/commons/2/27/Hangman-4.png", "https://upload.wikimedia.org/wikipedia/commons/6/6b/Hangman-5.png", "https://upload.wikimedia.org/wikipedia/commons/d/d6/Hangman-6.png"],
  stats: [], // what the user have guessed incorrectly
  blanks: [], //starts as all blanks for each character in the word, replace with letters as player guesses correctly
  messages: { 
    win: "You Win!", 
    lose: "You Lose!",
    correctOnce: "Correct! Letter appeared once in the word.",
    correctSeveral: "Correct! Letter appeared in the word.",
    incorrect: "Incorrect! Letter is not in the word."
  },
  guessLetter: "", // one character input at a time
  randomWord: "" // randomly picked from wordsList
}