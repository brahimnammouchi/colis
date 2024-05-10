import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InscriptionLivreurComponent } from './inscription-livreur/inscription-livreur.component';
import { ContactComponent } from './contact/contact.component';
import { PricingComponent } from './pricing/pricing.component';
import { ServicesComponent } from './services/services.component';
import { TrackingComponent } from './tracking/tracking.component';
import {RegisterComponent} from './register/register.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InscriptionClientComponent } from './inscription-client/inscription-client.component';

const firebaseConfig = {
  apiKey: "AIzaSyBY1YtM8RpqOAhOzzdpJdeKFmSb0W_H1qw",
  authDomain: "colis-a767e.firebaseapp.com",
  databaseURL: "https://colis-a767e-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "colis-a767e",
  storageBucket: "colis-a767e.appspot.com",
  messagingSenderId: "412474184299",
  appId: "1:412474184299:web:54c26448bae3af51ca972e",
  measurementId: "G-1P6PXTLT30"
};
@NgModule({
  declarations: [
    AppComponent,
    InscriptionLivreurComponent,
    ContactComponent,
    PricingComponent,
    ServicesComponent,
    TrackingComponent,
    LoginComponent,RegisterComponent, DashboardComponent, HomeComponent, InscriptionClientComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,

    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
