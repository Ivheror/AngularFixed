import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ListOwnerComponent } from './list-owner/list-owner.component';
import { DetailOwnerComponent } from './owner/detail-owner/detail-owner.component';
import { ListvetsComponent } from './listvets/listvets.component';


const routes: Routes = [
  {path: 'home', component: AppComponent},
  {path: 'listowners', component: ListOwnerComponent},
  {path: 'vets', component: ListvetsComponent},
  {path: 'owners/:id', component: DetailOwnerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
