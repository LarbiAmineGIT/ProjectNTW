import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
  path: 'list/:categorie',
  loadChildren: () =>
    import('./liste-recettes/liste-recettes.module').then((m) => m.ListRecipesModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
