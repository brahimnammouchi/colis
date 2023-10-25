import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LivreurService } from '../services/livreur.service';
import { ReactiveFormsModule } from '@angular/forms'; // Importez ReactiveFormsModule
import { NgModule } from '@angular/core';


@Component({
  selector: 'app-inscription-livreur',
  templateUrl: './inscription-livreur.component.html',
  styleUrls: ['./inscription-livreur.component.css']
})

export class InscriptionLivreurComponent {
  registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private livreurService: LivreurService) {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      adresse: ['', Validators.required],
      telephone: ['', Validators.required]
      // Ajoutez d'autres champs ici si nécessaire
    });
  }

  onSubmit() {
    if (this.registerForm.valid) {
      const email = this.registerForm.get('email').value;
      const password = this.registerForm.get('password').value;
      const livreurData = {
        nom: this.registerForm.get('nom').value,
        prenom: this.registerForm.get('prenom').value,
        adresse: this.registerForm.get('adresse').value,
        telephone: this.registerForm.get('telephone').value
        // Ajoutez d'autres champs ici si nécessaire
      };

      this.livreurService.registerLivreur(email, password, livreurData)
        .then(result => {
          if (result.success) {
            console.log(result.message);
            this.registerForm.reset();
          } else {
            console.error(result.message);
          }
        })
        .catch(error => {
          console.error(error);
        });
    }
  }
}
