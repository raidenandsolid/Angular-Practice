import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { routingModule } from './app.routing';
import { AppComponent } from './app.component';
import { FormComponent } from '../form/form.component';
import { FooterComponent } from '../footer/footer.component';
import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    routingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
