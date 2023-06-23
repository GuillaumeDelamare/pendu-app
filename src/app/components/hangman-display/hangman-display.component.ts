import { Component, OnInit, computed } from '@angular/core';
import { HangmanService } from 'src/app/services/hangman.service';

@Component({
  selector: 'app-hangman-display',
  templateUrl: './hangman-display.component.html',
  styleUrls: ['./hangman-display.component.css']
})
export class HangmanDisplayComponent {
  hangmanPictureLink = computed(() => this.hangmanService.isPlaying() ? `/assets/img/hangman-${this.hangmanService.failedTries()}.svg` : this.hangmanService.failedTries() >= 7 ? '/assets/img/hangman-dead.svg' : '/assets/img/hangman-saved.svg')
  hangmanClass = computed(() => this.hangmanService.isPlaying() ? `playing` : this.hangmanService.failedTries() >= 7 ? 'lose' : '/assets/img/hangman-saved.svg')

  constructor(private hangmanService: HangmanService) { }
}
