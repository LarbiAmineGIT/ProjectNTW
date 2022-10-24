import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListeComponent } from './liste.component';
import { RouterModule, Routes } from '@angular/router';
import { RatingModule } from 'primeng/rating';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { TabViewModule } from 'primeng/tabview';
import { DialogModule } from 'primeng/dialog';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { SliderModule } from 'primeng/slider';
import { SelectButtonModule } from 'primeng/selectbutton';
import { ChipModule } from 'primeng/chip';
import { ListeRecettesComponent } from './liste-recettes/liste-recettes.component';


const routes: Routes = [
  {
    path: '',
    component: ListeComponent
  },
  {
    path: ':categorie',
    component: ListeRecettesComponent
  }
];

@NgModule({
  declarations: [ListeComponent,ListeRecettesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    RatingModule,
    FormsModule,    
    TableModule,
    TabViewModule,
    DialogModule,
    ReactiveFormsModule,
    OverlayPanelModule,
    SelectButtonModule,
    SliderModule,
    ChipModule
    
  ]
})
export class ListeModule { }
