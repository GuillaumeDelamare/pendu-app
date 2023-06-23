import { Injectable, signal } from '@angular/core';
import { RandomWordGeneratorService } from './random-word-generator.service';

@Injectable({
  providedIn: 'root'
})
export class HangmanService {
  triedLetters = signal<string[]>([])
  failedTries = signal(0)
  wordToFind = ""
  wordMasked = signal("")
  isPlaying = signal(false)

  constructor(private randomWordGenerator: RandomWordGeneratorService) { }

  private generateMask() {
    let newMask = ""

    for(let i = 0; i < this.wordToFind.length; i++) {
      if(this.triedLetters().includes(this.wordToFind[i])) {
        newMask += this.wordToFind[i]
      } else {
        newMask += "_"
      }
    }

    this.wordMasked.set(newMask)
  }

  tryLetter(letter: string) {
    if (!this.triedLetters().includes(letter)) {
      this.triedLetters.update(oldLetters => [...oldLetters, letter])
      if (this.wordToFind.includes(letter)) {
        this.generateMask()
      } else {
        this.failedTries.update(prev => prev + 1)
      }

      this.checkWinConditions()
    }
  }

  private checkWinConditions() {
    if (this.failedTries() >= 7 || this.wordMasked().split(" ").join("") === this.wordToFind) {
      this.isPlaying.set(false)
    }
  }

  newGame() {
    this.wordToFind = this.randomWordGenerator.getRandomWord().toUpperCase()
    this.triedLetters.set([])
    this.failedTries.set(0)
    this.isPlaying.set(true)
    this.generateMask()

    console.log(this.wordToFind);
    console.log(this.wordMasked());
    
    
  }
}
