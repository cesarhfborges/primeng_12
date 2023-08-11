import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClient, HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import {SharedModule} from './shared/shared.module';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {translateLoader} from './shared/translate/translate-loader';

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        AppRoutingModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: (translateLoader),
                deps: [HttpClient],
            },
            defaultLanguage: 'pt-BR',
        }),
        SharedModule,
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    providers: [],
})
export class AppModule {
}
