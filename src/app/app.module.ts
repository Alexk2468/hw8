import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { WordleformComponent } from './wordleform/wordleform.component';
import { WordleService } from './wordleservice.service';

@NgModule({
  declarations: [
    AppComponent,
    WordleformComponent,
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule
  ],
  providers: [WordleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
