import { NgModule } from '@angular/core';
import { CoreModule } from './../core/core.module';
import { CommonModule } from '@angular/common';
import { BookSearchComponent } from './book-search/book-search.component';
import { BooksRoutingModule } from './books-routing.module';
import { BookSearchService } from './services/search/book-search.service';

@NgModule({
  declarations: [BookSearchComponent],
  imports: [
    CommonModule,
    BooksRoutingModule,
    CoreModule
  ],
  providers: [BookSearchService],
  exports: [BooksRoutingModule]
})
export class BooksModule { }
