import { Component, OnInit } from '@angular/core';
import { WordleService } from '../wordleservice.service';
@Component({
  selector: 'app-wordleform',
  templateUrl: './wordleform.component.html',
  styleUrls: ['./wordleform.component.css'],
})
export class WordleformComponent implements OnInit {
  word: string;
  guess: string;
  submittedGuess: string;
  guesses: Array<string>;
  correctLetters: Array<number>;
  correctPositions: Array<number>;
  lengthMsgs: Array<string>;
  errorStr: string;
  finished: boolean;
  classType: string;
  constructor(private wordleService: WordleService) {
    this.word = "";
    this.guess = '';
    this.submittedGuess = "";
    this.guesses = [];
    this.correctLetters = [];
    this.correctPositions = [];
    this.lengthMsgs = [];
    this.errorStr = "";
    this.finished = false;
    this.classType = "";
    this.wordleService.sendQuery(this.guess).subscribe(
      (data) => {
        this.word = data.request;
      }
    )
  }
  
  response: any;
  onSubmit() {
    this.submittedGuess = this.guess;
    let correctPositionsNum = 0;
    let correctLettersNum = 0;
    let wordleCopy = this.word.split("");
    if (this.guesses.includes(this.submittedGuess)) {
      this.errorStr = this.submittedGuess + " has already been guessed!";
      this.classType = "error";
    }
    else if (this.submittedGuess.trim().length==0) {
      this.errorStr = "No guess was entered!";
      this.classType = "error";
    }
    else if (this.submittedGuess == this.word) {
      this.guesses.push(this.submittedGuess);
      this.correctPositions.push(this.word.length);
      this.correctLetters.push(this.word.length);
      this.lengthMsgs.push("Guess is correct length!");
      this.errorStr = "Correct Guess!";
      this.classType = "win";
      this.finished = true;
    }
    else {
      this.guesses.push(this.submittedGuess);
      this.errorStr = "";
      this.classType = "none";
      if (this.submittedGuess.length < this.word.length) {
        this.lengthMsgs.push("Guess too short!");
        for (let i = 0; i < this.submittedGuess.length; i++) {
          if (this.submittedGuess[i] == this.word[i]) {
              correctPositionsNum++;
          }
          if (wordleCopy.indexOf(this.submittedGuess[i]) != -1) {
              correctLettersNum++;
              wordleCopy[wordleCopy.indexOf(this.submittedGuess[i])] = "_";
          }
        }
      }
      else if (this.submittedGuess.length > this.word.length) {
        this.lengthMsgs.push("Guess too long!");
        for (let i = 0; i < this.word.length; i++) {
          if (this.submittedGuess[i] == this.word[i]) {
              correctPositionsNum++;
          }
          if (wordleCopy.indexOf(this.submittedGuess[i]) != -1) {
              correctLettersNum++;
              wordleCopy[wordleCopy.indexOf(this.submittedGuess[i])] = "_";
          }
        }
      }
      else {
        this.lengthMsgs.push("Guess is correct length!");
        for (let i = 0; i < this.word.length; i++) {
          if (this.submittedGuess[i] == this.word[i]) {
              correctPositionsNum++;
          }
          if (wordleCopy.indexOf(this.submittedGuess[i]) != -1) {
              correctLettersNum++;
              wordleCopy[wordleCopy.indexOf(this.submittedGuess[i])] = "_";
          }
        }
      }
      this.correctLetters.push(correctLettersNum);
      this.correctPositions.push(correctPositionsNum);
    }

  }
  restart() {
    this.wordleService.sendQuery(this.guess).subscribe(
      (data) => {
        this.word = data.request;
      }
    )
    this.guesses = [];
    this.correctLetters = [];
    this.correctPositions = [];
    this.lengthMsgs = [];
    this.errorStr = "";
    this.classType = "none";
    this.finished = false;
  }

  ngOnInit(): void {
  }

}
