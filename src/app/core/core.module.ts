import { HeaderComponent } from './header/header.component';
import { NgModule } from '@angular/core';
import { TruncateTextPipe } from './pipes/truncate-text.pipe';
import { ResultsComponent } from './results/results.component';
import { ResultComponent } from './result/result.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SearchNavigationComponent } from './search-navigation/search-navigation.component';

@NgModule({
    declarations: [
        ResultsComponent,
        HeaderComponent,
        ResultComponent,
        TruncateTextPipe,
        SearchNavigationComponent
    ],
    imports: [
        RouterModule,
        BrowserModule,
        FormsModule,
    ],
    exports: [
        BrowserModule,
        FormsModule,
        RouterModule,

        SearchNavigationComponent,
        ResultsComponent,
        HeaderComponent,
        ResultComponent,
        TruncateTextPipe]
})
export class CoreModule { }
