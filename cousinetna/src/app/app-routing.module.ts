import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdddeletechangecomponentComponent } from './adddeletechangecomponent/adddeletechangecomponent.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component : HomeComponent},
  {  path: 'liste',  loadChildren: () =>    import('./liste/liste.module').then((m) => m.ListeModule),  },
  { path: 'adddeletechange', component : AdddeletechangecomponentComponent},
  { path: 'home', component : HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
