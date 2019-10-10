import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form-search',
  templateUrl: './form-search.component.html',
  styleUrls: ['./form-search.component.css']
})
export class FormSearchComponent implements OnInit {

  public name:string;
  public results:[];
  public result:string;
  

  @Input() labelButton:string;
  @Input() placeholderButton:string;
  @Output() evento = new EventEmitter();
  
  constructor() {
    
  }

  ngOnInit() {

  }

  search(){
    this.result = "Consulta realizada " + this.name;
    this.evento.emit({name: this.name, result: this.result});
  }
}
