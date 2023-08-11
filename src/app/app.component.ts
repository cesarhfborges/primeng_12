import {Component} from '@angular/core';
import {MessageService} from 'primeng/api';
import {DialogService} from 'primeng/dynamicdialog';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    providers: [DialogService, MessageService],
})
export class AppComponent {
    cities: any[];
    city: any = null;

    constructor(
        public dialogService: DialogService,
        public messageService: MessageService
    ) {
        this.cities = [
            {name: 'New York', code: 'NY'},
            {name: 'Rome', code: 'RM'},
            {name: 'London', code: 'LDN'},
            {name: 'Istanbul', code: 'IST'},
            {name: 'Paris', code: 'PRS'},
        ];
    }
}
