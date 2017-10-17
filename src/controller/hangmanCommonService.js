import StickmanConfig from './stickmanConfig';

export default class HangmanCommonService {

    constructor() {
        this._listOfWordsToGuess = StickmanConfig.listOfWords;
        this._wordToPlayWith = null;
        this.chooseRandomWordToGuess();
        this._listOfGuessedLetters = [];
        this._numberOfLetterRemainGuess = this._wordToPlayWith.length;
    }

    get wordToPlayWith() {
        return this._wordToPlayWith;
    }

    get lives(){
        return this._lives;
    }

    chooseRandomWordToGuess() {
        this._wordToPlayWith = this._listOfWordsToGuess[Math.floor(Math.random() * this._listOfWordsToGuess.length)];
        return this._wordToPlayWith;
    }

   isRepeatingGuess(letter) {
        for(let index in this._listOfGuessedLetters){
        if(this._listOfGuessedLetters[index]===letter){
         return true;
          }
        }
        this._listOfGuessedLetters.push(letter);
        return false;
   }
    
    hasWonTheRound() {
        return this._numberOfLetterRemainGuess == 0;
    }

    updateNumberOfRemainLetterToGuess(numberOfLetterGuessed){
        this._numberOfLetterRemainGuess = this._numberOfLetterRemainGuess - numberOfLetterGuessed;
        return this._numberOfLetterRemainGuess;
    }

}