import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListOwnerComponent } from '../list-owner/list-owner.component';
import { DetailOwnerComponent } from './detail-owner/detail-owner.component';

@NgModule({
  declarations: [
    ListOwnerComponent,
    DetailOwnerComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ListOwnerComponent,
    DetailOwnerComponent
  ]
})
export class OwnerModule { }
