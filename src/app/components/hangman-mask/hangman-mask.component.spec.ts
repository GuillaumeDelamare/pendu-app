import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HangmanMaskComponent } from './hangman-mask.component';
import { HangmanService } from 'src/app/services/hangman.service';
import { By } from '@angular/platform-browser';

describe('HangmanMaskComponent', () => {
  let component: HangmanMaskComponent;
  let fixture: ComponentFixture<HangmanMaskComponent>;
  let hangmanService: HangmanService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HangmanMaskComponent],
      providers: [HangmanService],
    });
    fixture = TestBed.createComponent(HangmanMaskComponent);
    hangmanService = TestBed.inject(HangmanService);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Starting game', () => {
    it('should start the game', () => {
      // Arrange
      spyOn(hangmanService, 'newGame');

      // Act
      fixture.detectChanges();

      // Assert
      expect(hangmanService.newGame).toHaveBeenCalledTimes(1);
    });
  });
  describe('Mask', () => {

    it('should display mask', () => {
      // Arrange
      hangmanService.wordMasked.set('_T___T');
      spyOn(hangmanService, 'newGame');
      
      fixture.detectChanges();

      // Act
      const span: HTMLElement = fixture.debugElement.query(
        By.css('span')
      )?.nativeElement;

      // Assert
      expect(span.textContent).toBe('_ T _ _ _ T');
    });
  });
});
