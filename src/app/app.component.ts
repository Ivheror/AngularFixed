import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyectoAngular Ivan';
  public query: string;
  public mensaje: string;
  constructor(){
    this.query ='';
  }
  getEvento(event){
    this.mensaje = event.name + " = " +event.result; 
  }
}


