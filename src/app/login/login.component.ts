import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../shared/auth.service'; // Importez votre service d'authentification si vous en avez un
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  errorMessage: string;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private authService: AuthService, // Injectez le service d'authentification
  ) {
    this.createForm();
  }

  createForm() {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  navigateToRegistration() {
    this.router.navigate(['/register']); // Remplacez 'inscription' par le chemin de votre page d'inscription
  }

  login() {
    const email = this.loginForm.value.email;
    const password = this.loginForm.value.password;

    this.authService.signIn(email, password)
      .then(success => {
        if (success) {
          // Rediriger l'utilisateur après la connexion
          this.router.navigate(['/dashboard']);
        } else {
          this.errorMessage = 'Identifiants incorrects';
        }
      })
      .catch(error => {
        this.errorMessage = 'Erreur de connexion : ' + error.message;
      });
  }
}
