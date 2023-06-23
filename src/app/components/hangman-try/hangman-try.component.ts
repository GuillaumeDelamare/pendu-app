import { Component, computed, effect } from '@angular/core';
import { HangmanService } from 'src/app/services/hangman.service';

@Component({
  selector: 'app-hangman-try',
  templateUrl: './hangman-try.component.html',
  styleUrls: ['./hangman-try.component.css']
})
export class HangmanTryComponent {
  gameLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
  triedLetters: string[] = []
  disabledNewGame = true

  constructor(private hangmanService: HangmanService) { 
    effect(() => {
      this.triedLetters = this.hangmanService.triedLetters()
      this.disabledNewGame = this.hangmanService.isPlaying()
    })
  }

  onNewGameClick() {
    this.hangmanService.newGame()
  }

  onLetterClick(e: Event) {
    this.hangmanService.tryLetter((e.target as HTMLButtonElement).textContent!);
    
  }
}
