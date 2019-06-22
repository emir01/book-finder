import { BooksModule } from './books/books.module';
import { CoreModule } from './core/core.module';
import { NgModule } from '@angular/core';

import { BookTroveRootRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CoreModule,
    BookTroveRootRoutingModule,
    HttpClientModule,
    BooksModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
