import {Component} from '@angular/core';
import {MessageService} from 'primeng/api';
import {DialogService} from 'primeng/dynamicdialog';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    providers: [DialogService, MessageService],
})
export class AppComponent {
    constructor() {
    }


}
