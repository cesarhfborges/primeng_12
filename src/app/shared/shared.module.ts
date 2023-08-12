import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BaseLayoutComponent} from './layouts/base-layout/base-layout.component';
import {InputSwitchModule} from 'primeng/inputswitch';
import {InputTextModule} from 'primeng/inputtext';
import {RadioButtonModule} from 'primeng/radiobutton';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import {ImageModule} from 'primeng/image';
import {RippleModule} from 'primeng/ripple';
import {CheckboxModule} from 'primeng/checkbox';
import {SelectButtonModule} from 'primeng/selectbutton';
import {TranslateModule} from '@ngx-translate/core';
import {ToastModule} from 'primeng/toast';
import {MessageModule} from 'primeng/message';
import {DialogModule} from 'primeng/dialog';
import {MessagesModule} from 'primeng/messages';
import {MessageService} from 'primeng/api';
import {DialogService} from 'primeng/dynamicdialog';

const PRIME_COMPONENTS = [
    InputSwitchModule,
    InputTextModule,
    RadioButtonModule,
    CardModule,
    ButtonModule,
    ImageModule,
    RippleModule,
    CheckboxModule,
    SelectButtonModule,
    TranslateModule,
    ToastModule,
    MessageModule,
    MessagesModule,
    DialogModule
];

@NgModule({
    declarations: [
        BaseLayoutComponent,
        AuthLayoutComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        ...PRIME_COMPONENTS
    ],
    exports: [
        FormsModule,
        ReactiveFormsModule,
        ...PRIME_COMPONENTS
    ],
    providers: [
        MessageService,
        DialogService
    ]
})
export class SharedModule {
}
