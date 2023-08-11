import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    stateOptions: any[];

    constructor(
        private translateService: TranslateService
    ) {
        this.stateOptions = [{label: 'pt-BR', value: 'pt-BR'}, {label: 'en-US', value: 'en-US'}];
    }

    ngOnInit(): void {
    }

    get language(): string {
        return this.translateService.currentLang;
    }

    set language(value: string) {
        this.translateService.use(value);
    }
}
