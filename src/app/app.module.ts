import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import {ReactiveFormsModule} from "@angular/forms";
import { DecompteComponent } from './decompte/decompte.component';

@NgModule({
  declarations: [
    AppComponent,
    FormulaireComponent,
    DecompteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
