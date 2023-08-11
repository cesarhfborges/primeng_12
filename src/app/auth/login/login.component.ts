import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    form: FormGroup;

    constructor(
        private fb: FormBuilder,
        private router: Router
    ) {
        this.form = this.fb.group({
            email: ['pessoa@provedor.com', [Validators.required, Validators.email]],
            password: ['00000000', [Validators.required, Validators.minLength(6)]],
            remember: [false, []]
        });
    }

    ngOnInit(): void {
    }

    onSubmit(): void {
        this.form.markAllAsTouched();
        if (this.form.valid) {
            this.router.navigate(['/home']).catch();
        } else {
            this.form.get('password').reset();
        }
    }
}
