import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    imports: [
        CommonModule,
        FormsModule,
        MatCardModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule
    ],
    templateUrl: './login.component.html',
    styleUrl: './login.component.scss'
})
export class LoginComponent {
    email = '';
    password = '';
    errorMessage = '';

    constructor(private router: Router) { }

    onLogin() {
        if (!this.email || !this.password) {
            this.errorMessage = 'Veuillez remplir tous les champs';
            return;
        }

        // Simulation de connexion simple
        const users = JSON.parse(localStorage.getItem('users') || '[]');
        const user = users.find((u: any) => u.email === this.email && u.password === this.password);

        if (user) {
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('userEmail', this.email);
            localStorage.setItem('currentUser', JSON.stringify(user));
            this.router.navigate(['/dashboard']);
        } else {
            this.errorMessage = 'Email ou mot de passe incorrect';
        }
    }

    goToRegister() {
        this.router.navigate(['/register']);
    }

    goToHome() {
        this.router.navigate(['/home']);
    }
}
