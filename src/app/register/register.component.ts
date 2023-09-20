import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth, AngularFireAuthModule } from "@angular/fire/compat/auth";
import { Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../shared/auth.service'; // Importez votre service d'authentification si vous en avez un

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent {
  registerForm: FormGroup;

  constructor(
    private fb:FormBuilder,
    private afAuth: AngularFireAuth,
    private router: Router,
    private authService: AuthService, // Injectez le service d'authentification

  ){
    this.createForm();
  }

  createForm() {
    this.registerForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  async signUp() {
    const email = this.registerForm.value.email;
    const password = this.registerForm.value.password;

    try {
      const userCredential = await this.afAuth.createUserWithEmailAndPassword(email, password);
      //untilisateur enregistré avec succès
      console.log('utilisateur enregistré :', userCredential.user);
      //rediriger vers uen page après l'inscription (vers la page de connexion)
      this.router.navigate(['/login']);
    } catch (error) {
      //gerer le serreurs d'inscription
      console.error('Erreur d\'inscription :', error)
    }
  }

}
