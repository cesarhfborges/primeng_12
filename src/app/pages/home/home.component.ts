import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {AuthService} from '../../core/services';
import {Auth} from '../../core/interfaces/auth';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    stateOptions: any[];

    auth: Auth;

    constructor(
        private translateService: TranslateService,
        private authService: AuthService
    ) {
        this.stateOptions = [{label: 'pt-BR', value: 'pt-BR'}, {label: 'en-US', value: 'en-US'}];
    }

    ngOnInit(): void {
        this.authService.user().subscribe({
            next: value => {
                this.auth = value;
            }
        })
    }

    get language(): string {
        return this.translateService.currentLang;
    }

    set language(value: string) {
        this.translateService.use(value);
    }
}
