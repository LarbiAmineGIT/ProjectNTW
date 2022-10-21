import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListeRecettesComponent } from './liste-recettes.component';
import { RouterModule, Routes } from '@angular/router';
import {RatingModule} from 'primeng/rating';
import { FormsModule } from '@angular/forms';
import {DividerModule} from 'primeng/divider';

const routes: Routes = [
  {
    path: '',
    component: ListeRecettesComponent
  }
];

@NgModule({
  declarations: [ListeRecettesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    RatingModule,
    FormsModule,    
    DividerModule
  ]
})
export class ListRecipesModule { }
