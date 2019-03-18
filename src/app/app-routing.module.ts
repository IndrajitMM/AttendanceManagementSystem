import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { ListofusersComponent } from './listofusers/listofusers.component'

const routes: Routes = [
  {path:"NewUser",component:BodyComponent},
  {path:"ListOfUser",component:ListofusersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [BodyComponent,ListofusersComponent];