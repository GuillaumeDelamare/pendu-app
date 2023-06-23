import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RandomWordGeneratorService {
  words = ["Amazon", "Google", "Microsoft", "Apple", "Ebay", "Application", "Software", "Development", "Computer", "Angular"]
  constructor() { }

  getRandomWord() {
    return this.words[Math.floor(Math.random() * this.words.length)]
  }
}
