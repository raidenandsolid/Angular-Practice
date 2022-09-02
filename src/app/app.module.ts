import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { appRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { FormComponent } from '../form/form.component';
import { FooterComponent } from '../footer/footer.component';
import { RegisterComponent } from './register';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    FooterComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    appRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
