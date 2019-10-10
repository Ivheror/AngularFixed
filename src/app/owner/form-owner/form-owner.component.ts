import { Component, OnInit } from '@angular/core';
import { Owner } from '../owner';

@Component({
  selector: 'app-form-owner',
  templateUrl: './form-owner.component.html',
  styleUrls: ['./form-owner.component.css']
})
export class FormOwnerComponent implements OnInit {
  
  public ownerForm:Owner;
  public owner:Owner = {
    adress: '',
    city:'',
    firstName:'',
    lastName:'',
    pets: [],
    id: null,
    telephone:0

  };

  constructor() { 
    
  }

  ngOnInit() {
    this.owner.adress="";
    this.owner.city ='';
    this.owner.firstName="";
    this.owner.lastName='';
    this.owner.telephone=0;
    this.owner.pets=[];
    this.owner.id=null;
  }

  onSubmit(){
    console.log(this.owner);
  }
}
