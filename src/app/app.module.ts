import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MyDemoLibModule } from 'projects/my-demo-lib/src/public-api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, MyDemoLibModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
