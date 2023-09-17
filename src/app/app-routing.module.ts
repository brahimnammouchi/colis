import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { InscriptionLivreurComponent } from './inscription-livreur/inscription-livreur.component';
import { LoginComponent } from './login/login.component';
import { PricingComponent } from './pricing/pricing.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path: '', redirectTo:'login', pathMatch:'full'},
  { path: 'login', component: LoginComponent },
  { path: 'inscription-livreur', component: InscriptionLivreurComponent },
  { path: 'contact', component:ContactComponent},
  {path: 'pricing', component:PricingComponent},
  {path: 'login', component:LoginComponent},
  {path: 'register', component: RegisterComponent},
  // Ajoutez d'autres routes ici si nécessaire
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
