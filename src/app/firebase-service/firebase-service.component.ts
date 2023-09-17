import { Component } from '@angular/core';
import firebase from 'firebase/compat/app'; //v9
import 'firebase/database';
@Component({
  selector: 'app-firebase-service',
  templateUrl: './firebase-service.component.html',
  styleUrls: ['./firebase-service.component.css']
})
export class FirebaseServiceComponent {
  constructor() { }

  saveDataToFirebase(data: any) {
    // Enregistrez une entrée de journal dans Firebase
    firebase.database().ref('logs').push({
      message: 'Données enregistrées avec succès',
      timestamp: firebase.database.ServerValue.TIMESTAMP
    });
  }
}
