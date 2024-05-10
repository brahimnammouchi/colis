import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { User } from 'firebase/auth'; // Correct import for User
import firebase from 'firebase/app';
import 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(
    private auth: AngularFireAuth,
    private firestore: AngularFirestore,
    private router: Router,
  ) { }

  async registerClient(nom: string, contact: number, adresse_du_client: string) {
    try {
      const user: User | null = await new Promise(resolve => {
        const unsubscribe = firebase.auth().onAuthStateChanged(u => {
          unsubscribe();
          resolve(u);
        });
      });

      if (user) {
        // User is signed in, you can perform actions for authenticated users here
        console.log('User is signed in:', user.displayName);

        try {
          const clientData = { // You need to define clientData
            nom: nom,
            contact: contact,
            adresse_du_client: adresse_du_client
          };

          const clientRef = this.firestore.collection('clients');
          await clientRef.doc(user.uid).set(clientData);

          return { success: true, message: 'colis a été enregistré' };
        } catch (error) {
          return { success: false, message: 'Erreur d\'enregistrement de colis :' + error.message };
        }
      } else {
        // User is signed out, you may want to redirect to a login page or handle the case accordingly
        console.log('User is signed out');
      }
    } catch (error) {
      console.error('Error during registration:', error);
      return { success: false, message: 'Une erreur s\'est produite lors de l\'enregistrement' };
    }
  }
}
