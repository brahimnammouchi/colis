import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-inscription-livreur',
  templateUrl: './inscription-livreur.component.html',
  styleUrls: ['./inscription-livreur.component.css']
})
export class InscriptionLivreurComponent {
  inscriptionForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.inscriptionForm = this.formBuilder.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      adresse: ['', Validators.required],
      telephone: ['', Validators.required]
      // Ajoutez d'autres champs ici
    });
  }

  onSubmit() {
    if (this.inscriptionForm.valid) {
      // Envoyez les données d'inscription au serveur ou effectuez d'autres actions nécessaires
    }
  }
}
