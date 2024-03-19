import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountDetailsComponent } from './account-details/account-details.component';
import { InfoComponent } from './info/info.component';
import { AddressComponent } from './address/address.component';
import { NotesComponent } from './notes/notes.component';
import { SubmitComponent } from './submit/submit.component';

const routes: Routes = [
  {
    path:'info',component:InfoComponent
  },
  {
    path:'account',component:AccountDetailsComponent
  },
  {
    path:'address',component:AddressComponent
  },
  {
    path:'notes',component:NotesComponent
  },
  {
    path:'submit',component:SubmitComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
