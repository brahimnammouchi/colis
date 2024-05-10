import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { concat } from 'rxjs';
import { ClientService } from '../services/client.service';

import { InscriptionClientComponent } from './inscription-client.component';

@Component({
  selector: 'app-inscription-client',
  templateUrl: './inscription-client.component.html',
  styleUrls: ['./inscription-client.component.css']
})

export class InscriptionClientComponent{
  registerForm: FormGroup;
  constructor(private formBuilder: FormBuilder,private clientService: ClientService) {
    this.registerForm = this.formBuilder.group({
      nom: ['',[Validators.required]],
      contact: ['',[Validators.required, Validators.call]],
      adresse_du_client :['', Validators.required]
    });
  }
   onSubmit() {
    const clientData = {
      nom: this.registerForm.get('nom').value,
      contact: this.registerForm.get('contact').value,
      adresse_du_client: this.registerForm.get('adresse').value
    };
    this.clientService.registerClient(clientData).then(result => {})
  }
  }
}

