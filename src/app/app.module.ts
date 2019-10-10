import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { SearchModule } from './search/search.module';
import { HttpClientModule } from '@angular/common/http';
import { ListOwnerComponent } from './list-owner/list-owner.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { ListvetsComponent } from './listvets/listvets.component';//importante se usa siempre este.
import { DetailOwnerComponent } from './owner/detail-owner/detail-owner.component';

@NgModule({
  declarations: [ //declaracion imports y exports
    AppComponent, ListOwnerComponent, HomeComponent, NavComponent, ListvetsComponent, DetailOwnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    SearchModule //importamos el modulo de search paara poder hacerlo reutilizable
  ],
  providers: [],
  bootstrap: [AppComponent] 
})
export class AppModule { }
