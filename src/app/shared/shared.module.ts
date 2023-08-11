import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BaseLayoutComponent} from './layouts/base-layout/base-layout.component';
import {InputSwitchModule} from 'primeng/inputswitch';
import {InputTextModule} from 'primeng/inputtext';
import {RadioButtonModule} from 'primeng/radiobutton';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

const PRIME_COMPONENTS = [
    InputSwitchModule,
    InputTextModule,
    RadioButtonModule,
];

@NgModule({
    declarations: [
        BaseLayoutComponent,
        AuthLayoutComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RouterModule,
        ...PRIME_COMPONENTS
    ],
    exports: [
        ...PRIME_COMPONENTS
    ]
})
export class SharedModule {
}
