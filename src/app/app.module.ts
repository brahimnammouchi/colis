import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InscriptionLivreurComponent } from './inscription-livreur/inscription-livreur.component';
import { ContactComponent } from './contact/contact.component';
import { PricingComponent } from './pricing/pricing.component';
import { ServicesComponent } from './services/services.component';
import { TrackingComponent } from './tracking/tracking.component';
@NgModule({
  declarations: [
    AppComponent,
    InscriptionLivreurComponent,
    ContactComponent,
    PricingComponent,
    ServicesComponent,
    TrackingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
