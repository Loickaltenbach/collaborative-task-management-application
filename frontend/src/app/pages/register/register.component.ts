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
  firstName = '';
  lastName = '';
  fullName = '';
  email = '';
  password = '';
  confirmPassword = '';
  errorMessage = '';
  successMessage = '';

  constructor(private router: Router) { }

  isFormValid(): boolean {
    return !!(this.firstName && this.lastName && this.email && this.password && this.confirmPassword);
  }

  onRegister() {
    if (!this.firstName || !this.lastName || !this.email || !this.password || !this.confirmPassword) {
      this.errorMessage = 'Veuillez remplir tous les champs';
      return;
    }

    if (this.password !== this.confirmPassword) {
      this.errorMessage = 'Les mots de passe ne correspondent pas';
      return;
    }

    if (this.password.length < 4) {
      this.errorMessage = 'Le mot de passe doit contenir au moins 4 caractères';
      return;
    }

    // Simulation d'inscription réussie
    this.successMessage = 'Inscription réussie ! Redirection vers la connexion...';
    this.errorMessage = '';

    setTimeout(() => {
      this.router.navigate(['/login']);
    }, 2000);
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }
}
