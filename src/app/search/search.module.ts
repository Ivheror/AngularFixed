import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from '../app.component';
import { FormsModule } from '@angular/forms';
import { FormSearchComponent } from './form-search/form-search.component';

@NgModule({
  declarations: [
    FormSearchComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    FormSearchComponent
  ]
})
export class SearchModule { }
