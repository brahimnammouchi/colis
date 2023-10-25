import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LivreurService {
  constructor(
    private auth: AngularFireAuth,
    private firestore: AngularFirestore,
    private router: Router,

  ) {}

  async registerLivreur(email: string, password: string, livreurData: any) {
    try {
      const userCredential = await this.auth.createUserWithEmailAndPassword(email, password);
      const user = userCredential.user;

      // Enregistrez les détails du livreur dans Firebase Firestore (si nécessaire)
      const livreurRef = this.firestore.collection('livreurs');
      await livreurRef.doc(user.uid).set(livreurData);

      return { success: true, message: 'Inscription du livreur réussie.' };
    } catch (error) {
      return { success: false, message: 'Erreur d\'inscription du livreur : ' + error.message };
    }
  }
}
