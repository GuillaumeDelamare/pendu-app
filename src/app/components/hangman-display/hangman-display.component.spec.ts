import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HangmanDisplayComponent } from './hangman-display.component';
import { HangmanService } from 'src/app/services/hangman.service';
import { By } from '@angular/platform-browser';

describe('HangmanDisplayComponent', () => {
  let component: HangmanDisplayComponent;
  let fixture: ComponentFixture<HangmanDisplayComponent>;
  let hangmanService: HangmanService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HangmanDisplayComponent],
      providers: [HangmanService],
    });

    fixture = TestBed.createComponent(HangmanDisplayComponent);
    hangmanService = TestBed.inject(HangmanService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('hangmanPicture', () => {
    it('should display the good picture in playing mode', () => {
      // ARRANGE
      hangmanService.isPlaying.set(true);
      hangmanService.failedTries.set(2);

      fixture.detectChanges();

      // ACT
      const image: HTMLImageElement = fixture.debugElement.query(
        By.css('img')
      )?.nativeElement;

      // ASSERT
      expect(image).not.toBeUndefined();
      expect(image.src).toContain('/assets/img/hangman-2.svg');
      expect(image.className).toBe('playing');
    });

    it('should display the victory picture', () => {
      // ARRANGE
      hangmanService.isPlaying.set(false);
      hangmanService.failedTries.set(2);

      fixture.detectChanges();

      // ACT
      const image: HTMLImageElement = fixture.debugElement.query(
        By.css('img')
      )?.nativeElement;

      // ASSERT
      expect(image).not.toBeUndefined();
      expect(image.src).toContain('/assets/img/hangman-saved.svg');
      expect(image.className).toBe('/assets/img/hangman-saved.svg');
    });
    it('should display the loosing picture', () => {
      // ARRANGE
      hangmanService.isPlaying.set(false);
      hangmanService.failedTries.set(7);

      fixture.detectChanges();

      // ACT
      const image: HTMLImageElement = fixture.debugElement.query(
        By.css('img')
      )?.nativeElement;

      // ASSERT
      expect(image).not.toBeUndefined();
      expect(image.src).toContain('/assets/img/hangman-dead.svg');
      expect(image.className).toBe('lose');
    });
  });
});
