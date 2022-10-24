import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdddeletechangecomponentComponent } from './adddeletechangecomponent/adddeletechangecomponent.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
  path: 'list/:categorie',
  loadChildren: () =>
    import('./liste-recettes/liste-recettes.module').then((m) => m.ListRecipesModule),
  },
  { path: 'adddeletechange', component : AdddeletechangecomponentComponent},
  { path: 'home', component : HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
