import { TestBed } from '@angular/core/testing';

import { HangmanService } from './hangman.service';
import { RandomWordGeneratorService } from './random-word-generator.service';
import { of } from 'rxjs';

describe('HangmanService', () => {
  let service: HangmanService;

  const mockRandomWordGenerator = jasmine.createSpyObj(
    RandomWordGeneratorService,
    ['getRandomWord']
  );

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: RandomWordGeneratorService,
          useValue: mockRandomWordGenerator,
        },
      ],
    });
    service = TestBed.inject(HangmanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('newGame()', () => {
    it('should create a new game', () => {
      // ARRANGE
      mockRandomWordGenerator.getRandomWord.and.returnValue('hello');

      // ACT
      service.newGame();

      // ASSER
      expect(service.wordToFind).toBe('HELLO');
      expect(service.triedLetters()).toHaveSize(0);
      expect(service.failedTries()).toBe(0);
      expect(service.isPlaying()).toBe(true);
      expect(service.wordMasked()).toBe('_____');
    });
  });

  describe('tryLetter', () => {
    it('should try a letter already try', () => {
      // ARRANGE
      service.triedLetters.set(['A']);

      // ACT
      service.tryLetter('A');

      // ASSER
      expect(service.triedLetters()).toEqual(['A']);
    });

    it('should try a wrong letter', () => {
      // ARRANGE
      service.wordToFind = 'TEST';
      service.triedLetters.set([]);
      service.failedTries.set(0);
      service.isPlaying.set(true);
      service.wordMasked.set('____');

      // ACT
      service.tryLetter('B');

      // ASSER
      expect(service.triedLetters()).toEqual(['B']);
      expect(service.failedTries()).toBe(1);
      expect(service.isPlaying()).toBe(true);
      expect(service.wordMasked()).toBe('____');
    });

    it('should try a right letter', () => {
      // ARRANGE
      service.wordToFind = 'TEST';
      service.triedLetters.set(['B']);
      service.failedTries.set(1);
      service.isPlaying.set(true);
      service.wordMasked.set('____');

      // ACT
      service.tryLetter('E');

      // ASSER
      expect(service.triedLetters()).toEqual(['B', 'E']);
      expect(service.failedTries()).toBe(1);
      expect(service.isPlaying()).toBe(true);
      expect(service.wordMasked()).toBe('_E__');
    });

    it('should try a right letter and finish game', () => {
      // ARRANGE
      service.wordToFind = 'TEST';
      service.triedLetters.set(['B', 'T', 'E']);
      service.failedTries.set(1);
      service.isPlaying.set(true);
      service.wordMasked.set('TE_T');

      // ACT
      service.tryLetter('S');

      // ASSER
      expect(service.triedLetters()).toEqual(['B', 'T', 'E', 'S']);
      expect(service.failedTries()).toBe(1);
      expect(service.isPlaying()).toBe(false);
      expect(service.wordMasked()).toBe('TEST');
    });

    it('should try a wrong letter and loose game', () => {
      // ARRANGE
      service.wordToFind = 'TEST';
      service.triedLetters.set(['B', 'T', 'E']);
      service.failedTries.set(6);
      service.isPlaying.set(true);
      service.wordMasked.set('TE_T');

      // ACT
      service.tryLetter('Z');

      // ASSER
      expect(service.triedLetters()).toEqual(['B', 'T', 'E', 'Z']);
      expect(service.failedTries()).toBe(7);
      expect(service.isPlaying()).toBe(false);
      expect(service.wordMasked()).toBe('TE_T');
    });
  });
});
