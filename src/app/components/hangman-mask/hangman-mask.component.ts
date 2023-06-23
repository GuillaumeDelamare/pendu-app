import { Component, OnInit, computed } from '@angular/core';
import { HangmanService } from 'src/app/services/hangman.service';

@Component({
  selector: 'app-hangman-mask',
  templateUrl: './hangman-mask.component.html',
  styleUrls: ['./hangman-mask.component.css']
})
export class HangmanMaskComponent implements OnInit{
  mask = computed(() => this.hangmanService.wordMasked().split("").join(" "))

  constructor(private hangmanService: HangmanService) { }

  ngOnInit(): void {
    this.hangmanService.newGame()
  }
}
