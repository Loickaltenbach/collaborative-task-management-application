import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'Task Management App';

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit() {
    // Rediriger vers le dashboard si déjà connecté
    if (this.isLoggedIn && this.router.url === '/') {
      this.router.navigate(['/dashboard']);
    }
  }

  get isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }

  get userEmail(): string {
    return this.authService.getUserEmail();
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }

  goToRegister() {
    this.router.navigate(['/register']);
  }

  goToDashboard() {
    this.router.navigate(['/dashboard']);
  }

  goToHome() {
    this.router.navigate(['/']);
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }
}
