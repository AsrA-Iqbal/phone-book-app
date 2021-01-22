import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ContactRecordComponent } from './contact-record/contact-record.component';
import { AddContactComponent } from './add-contact/add-contact.component';

const routes: Routes = [
  {
    path:'',component:LoginComponent
  },
  {path:'contact-record',component:ContactRecordComponent},
  {path:'add-contact',component:AddContactComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
