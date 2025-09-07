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
    selector: 'app-register',
    imports: [
        CommonModule,
        FormsModule,
        MatCardModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule
    ],
    templateUrl: './register.component.html',
    styleUrl: './register.component.scss'
})
export class RegisterComponent {
    email = '';
    password = '';
    confirmPassword = '';
    fullName = '';
    errorMessage = '';
    successMessage = '';

    constructor(private router: Router) { }

    onRegister() {
        if (!this.email || !this.password || !this.confirmPassword || !this.fullName) {
            this.errorMessage = 'Veuillez remplir tous les champs';
            return;
        }

        if (this.password !== this.confirmPassword) {
            this.errorMessage = 'Les mots de passe ne correspondent pas';
            return;
        }

        if (this.password.length < 6) {
            this.errorMessage = 'Le mot de passe doit contenir au moins 6 caractères';
            return;
        }

        // Simulation d'inscription
        const users = JSON.parse(localStorage.getItem('users') || '[]');

        if (users.find((u: any) => u.email === this.email)) {
            this.errorMessage = 'Cet email est déjà utilisé';
            return;
        }

        const newUser = {
            id: users.length + 1,
            email: this.email,
            password: this.password,
            fullName: this.fullName,
            createdAt: new Date().toISOString()
        };

        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));

        this.successMessage = 'Compte créé avec succès !';
        this.errorMessage = '';

        setTimeout(() => {
            this.router.navigate(['/login']);
        }, 2000);
    }

    goToLogin() {
        this.router.navigate(['/login']);
    }

    goToHome() {
        this.router.navigate(['/home']);
    }
}
