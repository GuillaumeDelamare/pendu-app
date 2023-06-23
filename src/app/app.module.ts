import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HangmanDisplayComponent } from './components/hangman-display/hangman-display.component';
import { HangmanTryComponent } from './components/hangman-try/hangman-try.component';
import { HangmanMaskComponent } from './components/hangman-mask/hangman-mask.component';

@NgModule({
  declarations: [
    AppComponent,
    HangmanDisplayComponent,
    HangmanTryComponent,
    HangmanMaskComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
