import { NgModule } from '@angular/core';
import { CoreModule } from './../core/core.module';
import { CommonModule } from '@angular/common';
import { BookSearchComponent } from './book-search/book-search.component';
import { BooksRoutingModule } from './books-routing.module';
import { BookSearchService } from './services/search/book-search.service';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BookMapper } from './services/search/book-mapper';

@NgModule({
  declarations: [BookSearchComponent, BookDetailsComponent],
  imports: [
    CommonModule,
    BooksRoutingModule,
    CoreModule
  ],
  providers: [BookSearchService, BookMapper],
  exports: [BooksRoutingModule]
})
export class BooksModule { }
