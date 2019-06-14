import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookSearchComponent } from './book-search/book-search.component';

const routes: Routes = [
    { path: 'books', component: BookSearchComponent, pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)]
})
export class BooksRoutingModule { }
