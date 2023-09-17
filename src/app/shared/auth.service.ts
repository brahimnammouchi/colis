import { Injectable } from '@angular/core';
import { AngularFireAuth} from '@angular/fire/compat/auth'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private afAuth: AngularFireAuth, private router: Router) {}

  // Inscription (Registration)
  async signUp(email: string, password: string) {
    try {
      await this.afAuth.createUserWithEmailAndPassword(email, password);
      // L'utilisateur est inscrit avec succès
      return true;
    } catch (error) {
      console.error('Erreur d\'inscription :', error);
      return false;
    }
  }

  // Connexion (Login)
  async signIn(email: string, password: string) {
    try {
      await this.afAuth.signInWithEmailAndPassword(email, password);
      // L'utilisateur est connecté avec succès
      return true;
    } catch (error) {
      console.error('Erreur de connexion :', error);
      return false;
    }
  }

  // Déconnexion (Logout)
  async signOut() {
    try {
      await this.afAuth.signOut();
      // L'utilisateur est déconnecté avec succès
      return true;
    } catch (error) {
      console.error('Erreur de déconnexion :', error);
      return false;
    }
  }

  // Obtenir l'état de connexion de l'utilisateur
  get userIsLoggedIn() {
    return this.afAuth.authState !== null;
  }

  // Obtenir l'utilisateur actuellement connecté
  get currentUser() {
    return this.afAuth.currentUser;
  }
}
