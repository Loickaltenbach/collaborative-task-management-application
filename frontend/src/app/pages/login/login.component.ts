import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  email = '';
  password = '';
  loginForm: FormGroup;
  error: string | null = null;

  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onLogin() {
    if (!this.email || !this.password) {
      this.error = 'Veuillez remplir tous les champs';
      return;
    }

    // Simulation de connexion réussie
    localStorage.setItem('userEmail', this.email);
    localStorage.setItem('isLoggedIn', 'true');
    this.router.navigate(['/dashboard']);
  }

  goToRegister() {
    this.router.navigate(['/register']);
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.auth.login(this.loginForm.value).subscribe({
        next: (res) => {
          localStorage.setItem('token', res.token);
          this.router.navigate(['/']);
        },
        error: (err) => {
          this.error = err.error?.error || 'Erreur de connexion';
        }
      });
    }
  }
}
