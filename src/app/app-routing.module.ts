import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InscriptionClientComponent } from './inscription-client/inscription-client.component';
import { InscriptionLivreurComponent } from './inscription-livreur/inscription-livreur.component';
import { LoginComponent } from './login/login.component';
import { PricingComponent } from './pricing/pricing.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'login', component: LoginComponent },
  { path: 'inscription-livreur', component: InscriptionLivreurComponent },
  { path: 'inscription-client', component: InscriptionClientComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', redirectTo: '/dashboard' }, // Gardez ceci à la fin
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
