import { BookDetailsComponent } from './book-details/book-details.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookSearchComponent } from './book-search/book-search.component';

const routes: Routes = [
    { path: 'books', component: BookSearchComponent, pathMatch: 'full' },
    { path: 'books/:id', component: BookDetailsComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)]
})
export class BooksRoutingModule { }
