import {Component, ElementRef, OnInit, ViewChild, ViewChildren} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {MessageService} from 'primeng/api';
import {AuthService} from '../../core/services/auth.service';
import {InputText} from 'primeng/inputtext';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    @ViewChild('inputEmail') inputEmail: ElementRef;
    form: FormGroup;

    constructor(
        private fb: FormBuilder,
        private router: Router,
        private authService: AuthService,
        private messageService: MessageService
    ) {
        this.form = this.fb.group({
            email: ['cesar@chfb.com.br', [Validators.required, Validators.email]],
            password: ['12345678', [Validators.required, Validators.minLength(6)]],
            remember: [false, []]
        });
    }

    ngOnInit(): void {
    }

    onSubmit(): void {
        this.form.markAllAsTouched();
        if (this.form.valid) {
            this.form.disable();
            this.authService.login(this.form.value).subscribe({
                next: () => {
                    this.form.enable();
                    this.router.navigate(['/home']).catch();
                },
                error: (e: any) => {
                    this.form.enable();
                    this.form.get('password').reset();
                    this.inputEmail.nativeElement.focus();
                    this.inputEmail.nativeElement.select();
                    this.messageService.add({
                        severity: 'error',
                        summary: 'Ops...',
                        detail: 'Verifique se seu usuário/senha estão corretos.',
                    });
                }
            });
        } else {
            this.messageService.add({
                severity: 'warn',
                summary: 'Atenção',
                detail: 'Existem campos inválidos ou em branco.',
            });
            this.inputEmail.nativeElement.focus();
            this.inputEmail.nativeElement.select();
        }
    }
}
