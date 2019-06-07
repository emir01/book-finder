import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { BookSearchComponent } from './book-search/book-search.component';
import { HeaderComponent } from './header/header.component';
import { BookResultsComponent } from './book-results/book-results.component';
import { BookComponent } from './book/book.component';

@NgModule({
  declarations: [
    AppComponent,
    BookSearchComponent,
    HeaderComponent,
    BookResultsComponent,
    BookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
