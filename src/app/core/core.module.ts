import { HeaderComponent } from './header/header.component';
import { NgModule } from '@angular/core';
import { TruncateTextPipe } from './pipes/truncate-text.pipe';
import { ResultsComponent } from './results/results.component';
import { ResultComponent } from './result/result.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
        ResultsComponent,
        HeaderComponent,
        ResultComponent,
        TruncateTextPipe
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

        ResultsComponent,
        HeaderComponent,
        ResultComponent,
        TruncateTextPipe]
})
export class CoreModule { }
