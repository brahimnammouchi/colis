// inscription-client.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-inscription-client',
  templateUrl: './inscription-client.component.html',
  styleUrls: ['./inscription-client.component.css']
})
export class InscriptionClientComponent {
  clientDetails = {
    fullName: '',
    address: '',
    contactNumber: ''
  };

  submitForm() {
    // Envoyer les détails d'inscription au serveur ou effectuer toute autre action nécessaire
    console.log('Détails d\'inscription soumis:', this.clientDetails);
  }
}
