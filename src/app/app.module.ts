import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormModule } from './components/form/form.module';
import { EmailService } from './services/email.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormModule
  ],
  providers: [EmailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
