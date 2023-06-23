import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HangmanTryComponent } from './hangman-try.component';
import { HangmanService } from 'src/app/services/hangman.service';
import { of } from 'rxjs';

describe('HangmanTryComponent', () => {
  let component: HangmanTryComponent;
  let fixture: ComponentFixture<HangmanTryComponent>;
  let hangmanService: HangmanService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HangmanTryComponent],
      providers: [HangmanService],
    });
    fixture = TestBed.createComponent(HangmanTryComponent);
    component = fixture.componentInstance;
    hangmanService = TestBed.inject(HangmanService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('onNewGameClick()', () => {
    it("should call newGame's hangmanServices function", () => {
      // Arrange
      spyOn(hangmanService, 'newGame');

      // Act
      component.onNewGameClick();

      // Assert
      expect(hangmanService.newGame).toHaveBeenCalled();
    });
  });

  describe('onLetterClick()', () => {
    it("should call tryLetter's hangmanServices function", () => {
      // Arrange
      spyOn(hangmanService, 'tryLetter');

      let mockEvent: Event = jasmine.createSpyObj(Event, ['target']);

      // Act
      component.onLetterClick(mockEvent);

      // Assert
      expect(hangmanService.tryLetter).toHaveBeenCalled();
    });
  });
});
